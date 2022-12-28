import type { SaleorThemeColors } from "..";
export declare function getSecondaryButtonStyles(colors: SaleorThemeColors, isDarkMode: boolean): {
    border: string;
    color: string;
    "&:hover, &.Mui-focusVisible, &$hover, &$active": {
        color: string;
    };
    "&:disabled": {
        color: string;
        borderColor: string;
    };
    background: string;
    borderRadius: number;
    padding: number;
    transition: string;
};
export declare function getGhostButtonStyles(colors: SaleorThemeColors, isDarkMode: boolean): {
    color: string;
    "&:hover, &.Mui-focusVisible, &$hover, &$active": {
        color: string;
        background: string;
    };
    "&$active": {
        color: string;
        background: string;
    };
    "&:disabled": {
        color: string;
    };
    background: string;
    borderRadius: number;
    padding: number;
    transition: string;
};
