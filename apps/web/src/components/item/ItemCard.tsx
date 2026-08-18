import type { Item } from "../../generated/model";
import { Button } from "../ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../ui/card";

type ItemCardProps = {
    item: Item
};

export function ItemCard({
    item,
}: ItemCardProps) {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>
                        {item.name}
                    </CardTitle>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                <div>
                    ¥{item.plans.toLocaleString()}
                </div>

                <div className="flex gap-2">
                    <Button variant="outline">
                        編集
                    </Button>

                    {item.purchase === null && (
                        <Button>
                            購入
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}