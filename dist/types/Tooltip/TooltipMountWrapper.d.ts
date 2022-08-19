import React from "react";
export interface MountWrapperProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode;
}
/** Component used to wrap non-buttons for Tooltip support */
export declare const TooltipMountWrapper: React.ForwardRefExoticComponent<{
    children: React.ReactNode;
} & React.RefAttributes<HTMLButtonElement>>;
