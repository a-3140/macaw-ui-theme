import { ButtonProps as MuiButtonProps, ButtonTypeMap as MuiButtonTypeMap } from "@material-ui/core/Button";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import React from "react";
export declare type ButtonVariant = "primary" | "secondary" | "tertiary";
export declare type ButtonColor = "primary" | "secondary" | "text";
interface ButtonInnerProps {
    color?: ButtonColor;
    error?: boolean;
    variant?: ButtonVariant;
}
export interface ButtonTypeMap<P = {}, D extends React.ElementType = "button"> {
    props: Omit<MuiButtonTypeMap<P, D>["props"], "variant" | "color"> & ButtonInnerProps;
    defaultComponent: D;
    classKey: never;
}
export declare type ButtonProps<T extends React.ElementType = "button"> = Omit<MuiButtonProps<T>, "variant"> & ButtonInnerProps;
export declare const Button: OverridableComponent<ButtonTypeMap<{}, "button">>;
export {};
