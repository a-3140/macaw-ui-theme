import { ButtonProps } from "@material-ui/core/Button";
import React from "react";
export interface ExpandButtonProps extends ButtonProps {
    isShrunk: boolean;
}
export declare const ExpandButton: React.FC<ExpandButtonProps>;
