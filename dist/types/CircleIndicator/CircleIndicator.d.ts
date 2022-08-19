import React from "react";
import { PillColor } from "../Pill";
export declare type CircleIndicatorColor = PillColor;
export interface CircleIndicatorProps {
    color: CircleIndicatorColor;
}
/**
 * @deprecated use IndicatorCircle component instead */
export declare const CircleIndicator: React.FC<CircleIndicatorProps>;
