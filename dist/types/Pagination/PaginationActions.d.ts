import { ButtonBaseTypeMap } from "@material-ui/core/ButtonBase";
import React from "react";
declare type BaseButtonProps<M = unknown> = M extends Object ? ButtonBaseTypeMap<M & {
    component: React.ElementType;
}>["props"] : ButtonBaseTypeMap<{
    href?: string;
}>["props"];
export interface PaginationActionsProps<BProps = unknown> {
    className?: string;
    disabled?: boolean;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    nextIconButtonProps?: BaseButtonProps<BProps>;
    prevIconButtonProps?: BaseButtonProps<BProps>;
    onNextPage?: () => void;
    onPreviousPage?: () => void;
}
export declare const PaginationActions: {
    <BProps>({ className, disabled, hasNextPage, hasPreviousPage, nextIconButtonProps, prevIconButtonProps, onNextPage, onPreviousPage, ...other }: PaginationActionsProps<BProps>): JSX.Element;
    displayName: string;
};
export {};
