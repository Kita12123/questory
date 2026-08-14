# SETUP

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

## Orval setup
**reference:** [Orval installation](https://orval.dev/docs/installation) and [Orval Quickstart](https://orval.dev/docs/quick-start)
1. Create `openapi.yaml` file in `packages/openapi` directory.
2. Create `orval.config.ts` file in `apps/web/` directory.
3. Install Dependencies:
   ```bash
   npm install orval --save-dev
   ```
4. Generate API client:
   ```bash
   npx orval --config ./orval.config.ts
   ```