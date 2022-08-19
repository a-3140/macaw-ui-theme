import React from "react";
import { BaseSidebarProps } from "./types";
export interface SidebarProps extends BaseSidebarProps {
    activeId: string;
}
export declare const Sidebar: React.FC<SidebarProps>;
