import React from "react";
export declare type FilterMenuLabels = Record<"header", string>;
export interface FilterMenuProps {
    anchorEl: HTMLElement | null;
    labels: FilterMenuLabels;
    open: boolean;
    onClose: () => void;
}
export declare const FilterMenu: React.FC<FilterMenuProps>;
