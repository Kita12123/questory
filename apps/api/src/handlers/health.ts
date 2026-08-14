import { prisma } from "../lib/prisma.js";

/**
 * 疎通確認用のヘルスチェックハンドラー
 * @description データベースへの接続確認を行い、結果を返します。
 * @returns ヘルスチェックの結果
 */
export const getHealth = async () => {
    try {
        await prisma.$queryRaw`SELECT 1`;

        return {
            status: "ok",
            database: "ok",
        };
    } catch (error) {
        console.error("Database connection failed:", error);

        return {
            status: "ok",
            database: "error",
        };
    }
};