import { Side } from "@floating-ui/core";
import { SaleorTheme } from "../theme";
import { TooltipProps } from "./Tooltip";
export type StyleProps = Pick<TooltipProps, "variant"> & {
    side: Side;
};
export declare const getBorderColor: (isDark: boolean) => (props: StyleProps) => string;
export declare const getBackgroundColor: (isDark: boolean, theme: SaleorTheme) => (props: StyleProps) => string;
declare const useStyles: (props: StyleProps) => import("@material-ui/styles").ClassNameMap<"header" | "dark" | "tooltip">;
export declare const useArrowStyles: (props: StyleProps) => import("@material-ui/styles").ClassNameMap<string>;
export default useStyles;
export declare const useMountWrapperStyles: (props?: any) => import("@material-ui/styles").ClassNameMap<"wrapper">;
