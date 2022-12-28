import { IconButtonProps as MuiIconButtonProps, IconButtonTypeMap as MuiIconButtonTypeMap } from "@material-ui/core/IconButton";
import { OverrideProps } from "@material-ui/core/OverridableComponent";
import React from "react";
import { UserInteraction } from "../../types/utils";
export interface IconButtonInnerProps {
    error?: boolean;
    hoverOutline?: boolean;
    state?: UserInteraction;
    variant?: "primary" | "secondary" | "ghost";
}
export interface IconButtonTypeMap<P = {}, D extends React.ElementType = "button"> {
    props: Omit<MuiIconButtonTypeMap<P, D>["props"], "variant"> & IconButtonInnerProps & {
        href?: string;
    } & OverrideProps<MuiIconButtonTypeMap<P, D>, "a">;
    defaultComponent: D;
    classKey: never;
}
export type IconButtonProps<T extends React.ElementType = "button"> = MuiIconButtonProps<T, {
    component?: T;
}> & IconButtonInnerProps & {
    href?: string;
};
declare const _IconButton: React.FC<IconButtonProps>;
export declare const IconButton: <T extends React.ElementType<any> = "button">(props: {
    component?: T | undefined;
} & {
    color?: import("@material-ui/core").PropTypes.Color | undefined;
    disableFocusRipple?: boolean | undefined;
    edge?: false | "end" | "start" | undefined;
    size?: "small" | "medium" | undefined;
} & {
    action?: React.Ref<import("@material-ui/core/ButtonBase").ButtonBaseActions> | undefined;
    buttonRef?: React.Ref<unknown> | undefined;
    centerRipple?: boolean | undefined;
    children?: React.ReactNode;
    disabled?: boolean | undefined;
    disableRipple?: boolean | undefined;
    disableTouchRipple?: boolean | undefined;
    focusRipple?: boolean | undefined;
    focusVisibleClassName?: string | undefined;
    onFocusVisible?: React.FocusEventHandler<any> | undefined;
    tabIndex?: string | number | undefined;
    TouchRippleProps?: Partial<import("@material-ui/core/ButtonBase/TouchRipple").TouchRippleProps> | undefined;
} & import("@material-ui/core/OverridableComponent").CommonProps<MuiIconButtonTypeMap<{
    component?: T | undefined;
}, T>> & import("@material-ui/types").Omit<React.ComponentPropsWithRef<T>, keyof import("@material-ui/core/OverridableComponent").CommonProps<M>> & IconButtonInnerProps & {
    href?: string | undefined;
} & {
    ref?: React.ForwardedRef<T> | undefined;
}) => ReturnType<typeof _IconButton>;
export {};
