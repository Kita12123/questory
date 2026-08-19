import type { Config } from "@measured/puck";
import { DropZone } from "@measured/puck";
import { withLayoutConfig } from "./withLayoutConfig";

const rawConfig: Config = {
    components: {

        Card: {
            fields: { title: { type: "text", label: "タイトル" } },
            render: ({ title }) => (
                <div style={{ padding: "16px", border: "1px solid #ddd" }}>
                    <h3>{title || "カードタイトル"}</h3>
                </div>
            ),
        },

        Heading: {
            fields: { text: { type: "text", label: "見出し" } },
            render: ({ text }) => <h2>{text || "見出しテキスト"}</h2>,
        },

        // 【万能コンテナ Div】
        Div: {
            fields: {
                mode: {
                    type: "radio",
                    label: "レイアウトモード",
                    options: [
                        { label: "Flex (流動的)", value: "flex" },
                        { label: "Grid (構造的)", value: "grid" },
                    ],
                },
                gap: {
                    type: "number",
                    label: "間隔 (px)",
                    min: 0,
                },
                columns: {
                    type: "number",
                    label: "Grid列数 (Gridモード時)",
                    min: 1,
                },
            },
            defaultProps: {
                mode: "flex",
                gap: 16,
                columns: 3,
            },
            render: ({ mode, gap, columns }) => {
                // モードに応じて DropZone の表示スタイルを切り替える
                const style: React.CSSProperties =
                    mode === "grid"
                        ? {
                            display: "grid",
                            gridTemplateColumns: `repeat(${columns || 1}, 1fr)`,
                            gap: `${gap}px`,
                        }
                        : {
                            display: "flex",
                            flexWrap: "wrap",
                            gap: `${gap}px`,
                        };

                return <DropZone zone="div-content" style={style} />;
            },
        },
    },
};

export const config = withLayoutConfig(rawConfig);