import { Side } from "@floating-ui/react-dom-interactions";
import React from "react";
import { TooltipProps } from "./Tooltip";
interface ArrowProps {
    x: number | undefined;
    y: number | undefined;
    side: Side;
    variant: TooltipProps["variant"];
}
export declare const Arrow: React.ForwardRefExoticComponent<ArrowProps & React.RefAttributes<HTMLDivElement>>;
export {};
