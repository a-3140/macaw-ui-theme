import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import { TableProps } from "@material-ui/core/Table";
import React from "react";
export interface ResponsiveTableProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode | React.ReactNodeArray;
    flexBreakpoint?: Breakpoint;
    tableProps?: TableProps;
    className?: string;
    key?: string;
}
export declare const ResponsiveTable: React.FC<ResponsiveTableProps>;
