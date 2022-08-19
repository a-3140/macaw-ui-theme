import React from "react";
import { ConfirmButtonTransitionState } from "../ConfirmButton";
export interface ActionBarProps {
    disabled: boolean;
    state: ConfirmButtonTransitionState;
    className?: string;
    children: React.ReactNode[] | React.ReactNode;
}
export declare const ActionBar: React.FC<ActionBarProps>;
