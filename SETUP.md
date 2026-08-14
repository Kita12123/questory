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