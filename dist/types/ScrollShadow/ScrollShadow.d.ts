import React from "react";
export interface ScrollShadowProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    show: boolean;
    variant: "bottom" | "top";
}
export declare const ScrollShadow: React.FC<ScrollShadowProps>;
