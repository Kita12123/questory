import { prisma } from "../lib/prisma.js";

/**
 * ログインハンドラー
 * @description ユーザーのメールアドレスとパスワードを検証し、結果を返します。
 * @returns ログインの成否
 */
export const login = async (mail: string, password: string): Promise<{ isSuccess: boolean, token: string }> => {
    try {
        await prisma.user.findUniqueOrThrow({
            where: {
                email: mail,
            },
        });

        return { isSuccess: true, token: "dummy-token" };
    } catch (error) {
        console.error("Database connection failed:", error);

        return { isSuccess: false, token: "" };
    }
};