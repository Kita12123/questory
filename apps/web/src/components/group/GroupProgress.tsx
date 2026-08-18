import { useGetGroup } from "../../generated/groups/groups";
import { Progress } from "../ui/progress";

type GroupProgressProps = {
    groupId: string;
};

export function GroupProgress({
    groupId,
}: GroupProgressProps) {
    const {
        data,
        isLoading,
        isError,
    } = useGetGroup(groupId);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError || !data) {
        return (
            <div>
                グループを取得できませんでした。
            </div>
        );
    }

    const progress =
        data.progress.totalItems === 0
            ? 0
            : (data.progress.purchasedItems /
                data.progress.totalItems) *
            100;

    return (
        <div className="space-y-2">
            <div className="flex justify-between">
                <span>{data.name}</span>
                <span>
                    {Math.round(progress)}%
                </span>
            </div>

            <Progress value={progress} />
        </div>
    );
}