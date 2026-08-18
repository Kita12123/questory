import { useGetGroup } from "../../generated/groups/groups";
import type { Item } from "../../generated/model";

import { ItemCard } from "./ItemCard";

type ItemListProps = {
    groupId: string;
};

export function ItemList({
    groupId,
}: ItemListProps) {
    const {
        data,
        isLoading,
        isError,
    } = useGetGroup(groupId);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return (
            <div>
                Itemを取得できませんでした。
            </div>
        );
    }

    return (
        <div className="grid gap-4">
            {data?.items?.map((item: Item) => (
                <ItemCard
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    );
}