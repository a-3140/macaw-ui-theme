import { SaleorTheme } from "../theme";
import { IndicatorProps, IndicatorSize } from "./Indicator";
export declare const getIconColor: (theme: SaleorTheme, type: "mid" | "dark") => (props: Pick<IndicatorProps, "icon">) => string;
export declare const getSizeDimension: (size: IndicatorSize) => 24 | 16;
export declare const useStyles: (props: Required<Pick<IndicatorProps, "icon" | "size">>) => import("@material-ui/styles").ClassNameMap<"absolute" | "wrapper" | "wrapperCircle" | "wrapperOutline" | "circlePath" | "circleOutline">;
