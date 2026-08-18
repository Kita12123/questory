import type { GroupSummary } from "../../generated/model";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Progress } from "../ui/progress";

type GroupProgressCardProps = {
    group: GroupSummary
};

export function GroupProgressCard({
    group,
}: GroupProgressCardProps) {
    const progress =
        group.totalAmount === 0
            ? 0
            : ((group.purchasedAmount ?? 0) /
                (group.totalAmount ?? 0)) *
            100;

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    {group.name}
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-2">
                <div className="flex justify-between">
                    <span>購入進捗</span>
                    <span>
                        {Math.round(progress)}%
                    </span>
                </div>

                <Progress value={progress} />
            </CardContent>
        </Card>
    );
}