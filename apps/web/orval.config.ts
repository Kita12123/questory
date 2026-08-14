import { defineConfig } from "orval";

export default defineConfig({
    questory: {
        input: {
            target: "../../packages/openapi/openapi.yaml",
        },
        output: {
            mode: "tags-split",
            target: "src/generated/questory.ts",
            schemas: "src/generated/model",
            client: "react-query",
        },
    },
});