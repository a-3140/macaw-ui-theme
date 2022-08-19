import type { Theme, ThemeOptions } from "@material-ui/core/styles";
export declare type ThemeType = "light" | "dark";
export declare type VariantColors = Record<"verydark" | "dark" | "mid" | "light", string>;
export declare type SaleorThemeColors = Record<"paperBorder" | "autofill" | "disabled", string> & {
    highlightInactive: Record<"default", string>;
} & {
    background: Record<"default" | "paper", string>;
} & {
    checkbox: Record<"default", string>;
} & {
    divider: string;
} & {
    gray: Record<"default" | "disabled", string>;
} & {
    alert: AlertColors;
    theme: ThemeType;
    fail: VariantColors;
    warning: VariantColors;
    success: VariantColors;
    info: VariantColors;
    main: Record<1 | 2 | 3 | 4 | 5, string>;
    active: Record<1 | 2 | 3 | 4 | 5, string>;
    errorAction: Record<1 | 2 | 3 | 4 | 5, string>;
};
export declare type AlertPalette = Record<"success" | "error" | "warning" | "info", string>;
export declare type AlertColors = Record<"paper" | "icon", AlertPalette>;
interface ExtraPalette {
    alert: AlertColors;
    saleor: SaleorThemeColors;
    textHighlighted: {
        active: string;
        inactive: string;
    };
}
declare type ExtraPaletteOptions = Partial<ExtraPalette>;
export declare type SaleorPalette = Theme["palette"] & ExtraPalette;
export declare type SaleorPaletteOptions = ThemeOptions["palette"] & ExtraPaletteOptions;
export interface SaleorSpacing {
    (): string;
    (value: number): string;
    (topBottom: number, rightLeft: number): string;
    (top: number, rightLeft: number, bottom: number): string;
    (top: number, right: number, bottom: number, left: number): string;
}
export interface SaleorTheme extends Omit<Theme, "spacing"> {
    palette: SaleorPalette;
    spacing: SaleorSpacing;
}
export interface SaleorThemeOptions extends ThemeOptions {
    palette: SaleorPaletteOptions;
}
export declare type Themes = Record<ThemeType, SaleorThemeColors>;
export {};
