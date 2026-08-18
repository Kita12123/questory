import { useGetGroups } from "../../generated/groups/groups";
import type { GroupSummary } from "../../generated/model";

import { GroupProgressCard } from "./GroupProgressCard";

export function GroupProgressList() {
    const {
        data,
        isLoading,
        isError,
    } = useGetGroups();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return (
            <div>
                グループを取得できませんでした。
            </div>
        );
    }

    return (
        <div className="grid gap-4">
            {data?.map((group: GroupSummary) => (
                <GroupProgressCard
                    key={group.id}
                    group={group}
                />
            ))}
        </div>
    );
}