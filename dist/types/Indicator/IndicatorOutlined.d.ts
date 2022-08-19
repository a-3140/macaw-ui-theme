/// <reference types="react" />
import { IndicatorIcon, IndicatorSize } from "./Indicator";
export interface IndicatorOutlinedProps {
    icon: IndicatorIcon;
    size?: IndicatorSize;
    color?: "default" | "text";
    className?: string;
}
export declare const IndicatorOutlined: ({ icon, size, color, className, }: IndicatorOutlinedProps) => JSX.Element;
