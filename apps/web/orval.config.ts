import { defineConfig } from "orval";

export default defineConfig({
    questory: {
        input: {
            target: "../../packages/openapi/openapi.yaml",
        },
        output: {
            mode: "tags-split",
            target: "src/generated/api.ts",
            schemas: "src/generated/model",
            client: "react-query",

            baseUrl: {
                getBaseUrlFromSpecification: true,
            },

            override: {
                fetch: {
                    includeHttpResponseReturnType: false,
                },
            },
        },
    },
});