import type { Config } from "@measured/puck";

import { LoginForm } from "../../components/auth/LoginForm";

import {
    GroupProgressList,
} from "../../components/dashboard/GroupProgressList";
import { OverallProgress } from "../../components/dashboard/OverallProgress";

import {
    GroupProgress,
} from "../../components/group/GroupProgress";

import {
    ItemList,
} from "../../components/item/ItemList";

import {
    ItemPurchase,
} from "../../components/item/ItemPurchase";

export const config: Config = {
    components: {
        LoginForm: {
            fields: {},
            render: () => <LoginForm />,
        },

        OverallProgress: {
            fields: {
                purchasedAmount: {
                    type: "number",
                    label: "購入済み金額",
                },
                totalAmount: {
                    type: "number",
                    label: "合計金額",
                },
            },

            render: () => (
                <OverallProgress />
            ),
        },

        GroupProgressList: {
            fields: {},

            render: () => (
                <GroupProgressList />
            ),
        },

        GroupProgress: {
            fields: {
                groupId: {
                    type: "text",
                    label: "Group ID",
                },
            },

            render: ({ groupId }) => (
                <GroupProgress
                    groupId={groupId}
                />
            ),
        },

        ItemList: {
            fields: {
                groupId: {
                    type: "text",
                    label: "Group ID",
                },
            },

            render: ({ groupId }) => (
                <ItemList
                    groupId={groupId}
                />
            ),
        },

        ItemPurchase: {
            fields: {
                itemId: {
                    type: "text",
                    label: "Item ID",
                },
            },

            render: ({ itemId }) => (
                <ItemPurchase
                    itemId={itemId}
                />
            ),
        },
    },
};