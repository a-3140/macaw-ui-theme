import React from "react";
export type PaginationRowNumberSelectLabels = Record<"noOfRows", string>;
export interface PaginationRowNumberSelectProps {
    choices: number[];
    className?: string;
    disabled?: boolean;
    labels: PaginationRowNumberSelectLabels;
    rowNumber: number;
    onChange?: (value: number) => void;
}
export declare const PaginationRowNumberSelect: React.FC<PaginationRowNumberSelectProps>;
