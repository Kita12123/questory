import { Progress } from "../ui/progress";

import { useGetGroups } from "../../generated/groups/groups";
import type { GroupSummary } from "../../generated/model";

export function OverallProgress() {
    const { data: groups } = useGetGroups();

    let purchasedAmount = 0;
    let totalAmount = 0;
    groups?.forEach((group: GroupSummary) => {
        purchasedAmount += group.purchasedAmount ?? 0;
        totalAmount += group.totalAmount ?? 0;
    });

    const progress =
        totalAmount === 0
            ? 0
            : (purchasedAmount / totalAmount) * 100;

    return (
        <div className="space-y-2">
            <div className="flex justify-between">
                <span>全体の購入進捗</span>
                <span>{Math.round(progress)}%</span>
            </div>

            <Progress value={progress} />
        </div>
    );
}