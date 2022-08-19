import { CardProps } from "@material-ui/core/Card";
import React from "react";
export interface NavigationCardBaseProps extends Omit<CardProps, "classes"> {
    classes?: Record<"root" | "content", string>;
}
export declare const NavigationCardBase: React.FC<NavigationCardBaseProps>;
