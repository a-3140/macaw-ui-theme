import React from "react";
import { PaginationActionsProps } from "./PaginationActions";
import { PaginationRowNumberSelectProps } from "./PaginationRowNumberSelect";
export interface PaginationProps<ActionProps = {}> extends PaginationActionsProps<ActionProps>, Omit<PaginationRowNumberSelectProps, "className" | "choices" | "onChange" | "rowNumber"> {
    choices?: number[];
    disabled?: boolean;
    rowNumber?: number;
    onRowNumberUpdate?: (rowNumber: number) => void;
}
export declare const Pagination: {
    <ActionProps>({ choices, disabled, hasNextPage, hasPreviousPage, nextIconButtonProps, prevIconButtonProps, labels, rowNumber, onNextPage, onPreviousPage, onRowNumberUpdate, ...other }: PaginationProps<ActionProps>): React.ReactElement;
    displayName: string;
};
