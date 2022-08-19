import React from "react";
import { BaseListBodyProps, BaseListFooterProps, BaseListHeaderProps, BaseListItemCellProps, BaseListItemProps, BaseListProps } from "../BaseList";
export declare const OffsettedList: React.FC<BaseListProps>;
export declare const OffsettedListHeader: React.FC<BaseListHeaderProps>;
export declare const OffsettedListFooter: React.FC<BaseListFooterProps>;
export declare const OffsettedListBody: React.FC<BaseListBodyProps>;
export declare const OffsettedListItem: React.FC<Omit<BaseListItemProps, "classes">>;
export declare const OffsettedListItemCell: React.FC<Omit<BaseListItemCellProps, "classes">>;
export declare const useOffsettedListWidths: () => {
    actions: (n?: number) => string;
    checkbox: string;
};
