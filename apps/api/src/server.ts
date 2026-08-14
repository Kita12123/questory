import Fastify from "fastify";
import openapiGlue from "fastify-openapi-glue";

import { handlers } from "./handlers/index.js";

const app = Fastify({
    logger: true,
    ajv: {
        customOptions: {
            strict: false,
        },
    },
});

const main = async () => {
    await app.register(openapiGlue, {
        specification: "../../packages/openapi/openapi.yaml",
        serviceHandlers: handlers,
    });

    await app.listen({
        host: "0.0.0.0",
        port: 3000,
    });
};

main().catch((error) => {
    app.log.error(error);
    process.exit(1);
});