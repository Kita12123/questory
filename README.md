# questory
欲しいものと予算を一緒に管理するアプリ

# Getting Started
1. Install dependencies
   ```bash
   npm i
   ```
2. Start api project
   ```bash
   cd apps/api
   cp .env.example .env
   npx create-db
   npx prisma migrate dev
   npm run generate
   npm run dev
   ```
3. Start web project
   ```bash
   cd apps/web
   npm run generate
   npm run dev
   ```