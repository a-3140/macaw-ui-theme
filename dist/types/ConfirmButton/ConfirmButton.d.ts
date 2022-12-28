import React from "react";
import { ButtonProps } from "../Button";
export type ConfirmButtonTransitionState = "loading" | "success" | "error" | "default";
export type ConfirmButtonLabels = Record<"confirm" | "error", string>;
export interface ConfirmButtonProps extends Omit<ButtonProps, "classes"> {
    labels: ConfirmButtonLabels;
    noTransition?: boolean;
    transitionState: ConfirmButtonTransitionState;
    onTransitionToDefault?: () => void;
}
export declare const ConfirmButton: React.FC<ConfirmButtonProps>;
