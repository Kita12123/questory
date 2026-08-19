import type { ComponentConfig, ComponentData, Config } from "@measured/puck";
import React from "react";

// 親コンテナ（Div）の mode プロパティ型
type DivProps = {
    mode: "flex" | "grid";
    gap: number;
    columns?: number;
};

// 1. resolveFields の第2引数用の型
type ResolveFieldContext = {
    parent?: ComponentData<DivProps> | null;
    [key: string]: any;
};

// 2. render 内の props.puck 用の型
type PuckRenderContext = {
    dragRef?: React.Ref<any>;
    parent?: {
        type: string;
        props: DivProps;
    };
    [key: string]: any;
};

export function withLayoutConfig<C extends Config<any>>(config: C): C {
    const newComponents = { ...config.components } as Record<
        string,
        ComponentConfig<any>
    >;

    Object.keys(newComponents).forEach((key) => {
        if (key === "Div") return;

        const original = newComponents[key];
        const originalResolveFields = original.resolveFields;
        const originalRender = original.render;

        newComponents[key] = {
            ...original,
            inline: true,
            resolveFields: (data, context) => {
                const baseFields =
                    typeof originalResolveFields === "function"
                        ? originalResolveFields(data, context)
                        : original.fields || {};

                const ctx = context as ResolveFieldContext;

                if (ctx.parent?.type !== "Div") return baseFields;

                const parentMode = ctx.parent.props?.mode;

                if (parentMode === "grid") {
                    return {
                        ...baseFields,
                        _gridHeader: {
                            type: "custom",
                            render: () => (
                                <div style={{ fontWeight: "bold", fontSize: "14px", marginTop: "12px" }}>
                                    Grid設定
                                </div>
                            ),
                        },
                        gridSpan: { type: "number", label: "列スパン (1〜)", min: 1 },
                        gridRowSpan: { type: "number", label: "行スパン (1〜)", min: 1 },
                    };
                } else {
                    return {
                        ...baseFields,
                        _flexHeader: {
                            type: "custom",
                            render: () => (
                                <div style={{ fontWeight: "bold", fontSize: "14px", marginTop: "12px" }}>
                                    Flex設定
                                </div>
                            ),
                        },
                        flexWidth: {
                            type: "select",
                            label: "幅",
                            options: [
                                { label: "100%", value: "100%" },
                                { label: "50%", value: "calc(50% - 8px)" },
                                { label: "自動", value: "auto" },
                            ],
                        },
                        flexGrow: {
                            type: "radio",
                            label: "自動拡大",
                            options: [
                                { label: "ON", value: 1 },
                                { label: "OFF", value: 0 },
                            ],
                        },
                    };
                }
            },
            render: (props) => {
                const { gridSpan, gridRowSpan, flexWidth, flexGrow, puck } = props as any;

                const puckCtx = puck as PuckRenderContext;
                const parentMode = puckCtx.parent?.props?.mode;

                const content = originalRender(props);

                if (puckCtx.parent?.type === "Div") {
                    const style: React.CSSProperties =
                        parentMode === "grid"
                            ? {
                                gridColumn: `span ${gridSpan || 1}`,
                                gridRow: `span ${gridRowSpan || 1}`,
                            }
                            : {
                                flexBasis: flexWidth || "auto",
                                width: flexWidth || "100%",
                                flexGrow: flexGrow ?? 0,
                            };

                    return (
                        <div ref={puckCtx.dragRef} style={style}>
                            {content}
                        </div>
                    );
                }

                return <div ref={puckCtx.dragRef}>{content}</div>;
            },
        };
    });

    return {
        ...config,
        components: newComponents,
    } as C; // 渡された Config の型 C として返す
}