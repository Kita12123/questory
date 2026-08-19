import type { Data } from "@measured/puck";
import { Puck, Render } from "@measured/puck";
import "@measured/puck/puck.css";
import { Edit3, Eye, Save } from "lucide-react"; // アイコン用
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { config } from "../lib/puck/config";

const initialData: Data = {
    content: [],
    root: { props: { title: "New Page" } },
};

export function PuckEditorPage() {
    const [data, setData] = useState<Data>(initialData);
    const [mode, setMode] = useState<"edit" | "preview">("edit");

    return (
        <div className="flex flex-col min-h-screen">
            {/* shadcn/ui スタイルのヘッダーバー */}
            <header className="flex items-center justify-between px-6 py-3 border-b bg-background">
                <div className="flex items-center gap-2">
                    <h1 className="text-lg font-bold tracking-tight">Page Builder</h1>
                </div>

                {/* 編集 / プレビュー 切り替えタブ (shadcn/ui Tabs) */}
                <Tabs
                    value={mode}
                    onValueChange={(val) => setMode(val as "edit" | "preview")}
                    className="w-[220px]"
                >
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="edit" className="flex items-center gap-2">
                            <Edit3 className="w-4 h-4" />
                            編集
                        </TabsTrigger>
                        <TabsTrigger value="preview" className="flex items-center gap-2">
                            <Eye className="w-4 h-4" />
                            プレビュー
                        </TabsTrigger>
                    </TabsList>
                </Tabs>

                {/* アクションボタン */}
                <div className="flex items-center gap-2">
                    <Button
                        variant="default"
                        size="sm"
                        onClick={() => {
                            console.log("Saved Data:", data);
                            alert("保存しました！");
                        }}
                    >
                        <Save className="w-4 h-4 mr-2" />
                        保存する
                    </Button>
                </div>
            </header>

            {/* メインエリア */}
            <main className="flex-1">
                {mode === "preview" ? (
                    // プレビュー表示（ヘッダー等のUIが一切ない画面）
                    <div className="p-8 max-w-7xl mx-auto">
                        <Render config={config} data={data} />
                    </div>
                ) : (
                    // エディタ表示
                    <Puck
                        config={config}
                        data={data}
                        onChange={(newData) => setData(newData)}
                        onPublish={(newData) => setData(newData)}
                    />
                )}
            </main>
        </div>
    );
}