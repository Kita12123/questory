import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";

import { config } from "../lib/puck/config";

export function PuckEditorPage() {

    const handlePublish = (data: any) => {
        console.log("▼ Publish Data");
        const jsonOutput = JSON.stringify(data, null, 2);
        console.log(jsonOutput);
    };

    return (
        <Puck
            config={config}
            data={{
                content: [],
                root: {},
            }}
            onPublish={handlePublish}
        />
    );
}