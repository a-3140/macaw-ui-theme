import { Placement } from "@floating-ui/react-dom-interactions";
import React from "react";
export interface TooltipProps {
    variant?: "success" | "warning" | "error";
    placement?: Placement;
    arrow?: boolean;
    onClick?: React.MouseEventHandler<any>;
    onOpen?: () => void;
    onClose?: () => void;
    open?: boolean;
    initialOpen?: boolean;
    disabled?: boolean;
    children: React.ReactElement;
    header?: React.ReactNode;
    title?: React.ReactNode;
    /** Ref for element that triggers opening the tooltip on hover */
    referenceRef?: React.Ref<HTMLElement>;
    /** Ref for tooltip div element */
    floatingRef?: React.Ref<HTMLDivElement>;
}
export declare const Tooltip: React.FC<TooltipProps>;
