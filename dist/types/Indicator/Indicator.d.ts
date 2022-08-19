import React from "react";
export declare type IndicatorIcon = "warning" | "error" | "success" | "fail";
export declare type IndicatorSize = "regular" | "small";
export declare type IndicatorCombinations = `${IndicatorIcon}-${IndicatorSize}`;
export interface IndicatorProps {
    icon: IndicatorIcon;
    variant?: "outline" | "filled" | "text" | "icon";
    size?: IndicatorSize;
    className?: string;
}
export declare const mapVariantToIcon: Record<IndicatorCombinations, React.FunctionComponent<{
    className?: string;
}>>;
export declare const Indicator: React.ForwardRefExoticComponent<IndicatorProps & React.RefAttributes<HTMLSpanElement>>;
