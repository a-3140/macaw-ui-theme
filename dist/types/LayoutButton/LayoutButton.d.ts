import type { ButtonBaseProps } from "@material-ui/core/ButtonBase";
import React from "react";
import { UserInteraction } from "../../types/utils";
export type LayoutButtonProps<T extends React.ElementType> = ButtonBaseProps<T, {
    component?: T;
}> & {
    state?: UserInteraction;
};
export declare const LayoutButtonInner: {
    <T extends React.ElementType<any> = "button">({ className, children, state, component, ...rest }: LayoutButtonProps<T>, ref: React.ForwardedRef<HTMLButtonElement>): JSX.Element;
    displayName: string;
};
export declare const LayoutButton: <T extends React.ElementType<any>>(props: {
    component?: T | undefined;
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
} & import("@material-ui/core/OverridableComponent").CommonProps<import("@material-ui/core/ButtonBase").ButtonBaseTypeMap<{
    component?: T | undefined;
}, T>> & import("@material-ui/types").Omit<React.ComponentPropsWithRef<T>, keyof import("@material-ui/core/OverridableComponent").CommonProps<M>> & {
    state?: UserInteraction | undefined;
} & {
    ref?: React.ForwardedRef<unknown> | undefined;
}) => ReturnType<typeof LayoutButtonInner>;
