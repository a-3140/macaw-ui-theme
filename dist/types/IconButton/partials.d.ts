import type { SaleorThemeColors } from "..";
export declare function getSecondaryButtonStyles(colors: SaleorThemeColors): {
    "&:hover, &.Mui-focusVisible, &$hover, &$active": {
        color: string;
    };
    "&:disabled": {
        color: string;
    };
    background: string;
    borderRadius: number;
    color: string;
    padding: number;
    transition: string;
};
