import type { Theme } from "@material-ui/core/styles";
import React from "react";
import { Themes, ThemeType } from "./createSaleorTheme";
export interface ThemeProviderProps {
    defaultTheme?: ThemeType;
    /**
     * Passing an object here will result in losing visual consistency with
     * Saleor's Dashboard. Use with caution.
     */
    palettes?: Partial<Themes>;
    /**
     * Passing an object here will result in losing visual consistency with
     * Saleor's Dashboard. Use with caution.
     */
    overrides?: Partial<Theme>;
    /**
     * Enables server side rendering.
     */
    ssr?: boolean;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
