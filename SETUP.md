# SETUP

# Project `api` setup
1. Create `apps/api/` directory.
   ```bash
   mkdir apps/api
   cd apps/api
   ```

## Prisma setup
**reference:** [Prisma ORM Quickstart](https://www.prisma.io/docs/prisma-postgres/quickstart/prisma-orm)
1. Create `schema.prisma` file in `apps/api/prisma/` directory.
2. Create `prisma.config.ts` file in `apps/api/` directory.
3. Create `.env` file in `apps/api/` directory and add your database connection string:
   ```
   DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>?schema=public
   ```
4. Install Dependencies:
   ```bash
   npm install prisma @types/node --save-dev
   npm install @prisma/client @prisma/adapter-pg dotenv
   ```
5. Database migration:
   ```bash
   npx create-db
   npx prisma migrate dev --name init
   ```
6. Generate Prisma Client:
   ```bash
   npx prisma generate
   ```

## Fastify setup
**reference:** [Fastify OpenAPI TypeScript Generator](https://github.com/quinck-io/fastify-openapi-typescript-generator)
1. Create `openapi.yaml` file in `packages/openapi` directory.
2. Create `openapi-ts.config.ts` file in `apps/api/` directory.
3. Install Dependencies:
   ```bash
   npm install @walecloud/fastify-openapi-typescript-generator --save-dev
   ```
4. Generate OpenAPI TypeScript types:
   ```bash
   npx fastify-openapi-typescript -i ../../packages/openapi/openapi.yaml -o ./src/generated/openapi
   ```

# Project `web` setup

## shadcn/ui setup
**reference:** [shadcn/ui Installation](https://ui.shadcn.com/docs/installation/vite)
1. Initialize Project with shadcn/ui:
   ```bash
   npx shadcn@latest init --preset b1aKNEsHA --base base --template vite --rtl --pointer
   # What is your project named? ... web
   ```
2. Add shadcn/ui components:
   ```bash
   npx shadcn@latest add button card dialog input label progress tabs
   npm install lucide-react
   ```

## Orval setup
**reference:** [Orval installation](https://orval.dev/docs/installation) and [Orval Quickstart](https://orval.dev/docs/quick-start)
1. Create `openapi.yaml` file in `packages/openapi` directory.
2. Create `orval.config.ts` file in `apps/web/` directory.
3. Install Dependencies:
   ```bash
   npm install orval --save-dev
   npm install @tanstack/react-query
   ```
4. Generate OpenAPI TypeScript client:
   ```bash
   npx orval --config ./orval.config.ts
   ```

## Puck setup
**reference:** [Puck Get Started](https://puckeditor.com/docs/getting-started)
1. Create `config.tsx` file in `apps/web/src/lib/puck/` directory.
2. Install Dependencies:
   ```bash
   npm install @measured/puck --save-dev
   npm install react-router-dom
   ```
