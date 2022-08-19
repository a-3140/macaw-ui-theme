import React from "react";
import { PaginationProps } from "./Pagination";
export interface TablePaginationProps extends PaginationProps {
    colSpan: number;
}
export declare const TablePagination: React.FC<TablePaginationProps>;
