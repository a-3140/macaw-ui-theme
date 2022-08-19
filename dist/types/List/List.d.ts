import React from "react";
import { BaseListBodyProps, BaseListFooterProps, BaseListHeaderProps, BaseListItemCellProps, BaseListItemProps, BaseListProps } from "../BaseList";
export declare const List: React.FC<BaseListProps>;
export declare const ListHeader: React.FC<BaseListHeaderProps>;
export declare const ListFooter: React.FC<BaseListFooterProps>;
export declare const ListBody: React.FC<BaseListBodyProps>;
export declare const ListItem: React.FC<Omit<BaseListItemProps, "classes">>;
export declare const ListItemCell: React.FC<Omit<BaseListItemCellProps, "classes">>;
export declare const ListItemCellAction: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const useListWidths: () => {
    actions: (n?: number) => string;
    checkbox: string;
};
