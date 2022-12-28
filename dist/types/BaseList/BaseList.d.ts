import React from "react";
import { ListGridTemplate } from "./styles";
export interface BaseListProps extends React.HTMLAttributes<HTMLElement> {
    gridTemplate: ListGridTemplate;
}
export declare const BaseList: React.FC<BaseListProps>;
export type BaseListItemClassKey = "row" | "rowBody" | "rowHead" | "rowFoot" | "rowHover" | "rowBodySelected";
export interface BaseListItemProps extends React.HTMLAttributes<HTMLDivElement | HTMLLIElement> {
    classes: Record<BaseListItemClassKey, string>;
    hover?: boolean;
    selected?: boolean;
}
export declare const BaseListItem: React.FC<BaseListItemProps>;
export type BaseListItemCellClassKey = "cell" | "cellBody" | "cellHeader" | "cellAction" | "cellCheckbox";
export interface BaseListItemCellProps extends React.HTMLAttributes<HTMLDivElement> {
    classes: Record<BaseListItemCellClassKey, string>;
    colSpan?: number;
    padding?: "action" | "checkbox" | "none";
}
export declare const BaseListItemCell: React.FC<BaseListItemCellProps>;
export type BaseListHeaderProps = React.HTMLProps<HTMLElement>;
export declare const BaseListHeader: React.FC<BaseListHeaderProps>;
export type BaseListBodyProps = React.HTMLProps<HTMLUListElement>;
export declare const BaseListBody: React.FC<BaseListBodyProps>;
export type BaseListFooterProps = React.HTMLProps<HTMLElement>;
export declare const BaseListFooter: React.FC<BaseListFooterProps>;
