import React from "react";
import { ConfirmButtonLabels, ConfirmButtonTransitionState } from "../ConfirmButton";
export type SavebarLabels = ConfirmButtonLabels & Record<"delete" | "cancel", string>;
export type SavebarTooltips = Partial<Record<"confirm" | "delete" | "cancel", string>>;
export interface SavebarProps {
    disabled: boolean;
    state: ConfirmButtonTransitionState;
    labels: SavebarLabels;
    tooltips?: SavebarTooltips;
    className?: string;
    onCancel: () => void;
    onDelete?: () => void;
    onSubmit: () => void;
}
export declare const Savebar: React.FC<SavebarProps>;
