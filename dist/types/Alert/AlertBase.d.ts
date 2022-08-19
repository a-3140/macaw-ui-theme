import { CardProps } from "@material-ui/core/Card";
import React from "react";
export declare type AlertVariant = "error" | "warning" | "success" | "info";
export interface AlertBaseProps extends Omit<CardProps, "variant"> {
    className?: string;
    variant: AlertVariant;
}
export declare const AlertBase: React.FC<AlertBaseProps>;
