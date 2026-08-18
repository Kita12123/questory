import { usePurchaseItem } from "@/generated/purchase/purchase";
import { Button } from "../ui/button";

type ItemPurchaseProps = {
    itemId: string;
};

export function ItemPurchase({
    itemId,
}: ItemPurchaseProps) {
    const {
        mutate,
        isPending,
    } = usePurchaseItem();

    const handlePurchase = () => {
        mutate({
            itemId: itemId,
            data: {
                amount: 100,
                currency: "JPY",
                purchasedAt: new Date().toISOString(),
            }
        });
    };

    return (
        <Button
            onClick={handlePurchase}
            disabled={isPending}
        >
            {isPending
                ? "購入中..."
                : "購入"}
        </Button>
    );
}