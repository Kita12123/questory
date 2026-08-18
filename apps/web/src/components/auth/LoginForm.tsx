import { useState } from "react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { useLogin } from "../../generated/auth/auth";


export function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {
        mutate,
        isError,
    } = useLogin();

    const handleSubmit = (
        event: React.FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();

        mutate({ data: { email, password } });

        if (isError) {
            return (
                <div>
                    ログインに失敗しました。
                </div>
            );
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6"
        >
            <div className="space-y-2">
                <Label htmlFor="email">
                    メールアドレス
                </Label>

                <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) =>
                        setEmail(event.target.value)
                    }
                    required
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="password">
                    パスワード
                </Label>

                <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(event) =>
                        setPassword(event.target.value)
                    }
                    required
                />
            </div>

            <Button
                type="submit"
                className="w-full"
            >
                ログイン
            </Button>
        </form>
    );
}