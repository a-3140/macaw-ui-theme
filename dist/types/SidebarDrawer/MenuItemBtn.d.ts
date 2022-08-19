import React from "react";
import { CustomLinkComponent, SidebarMenuItem } from "../Sidebar/types";
export interface MenuItemBtnProps {
    menuItem: SidebarMenuItem;
    onClick: (menuItem: SidebarMenuItem) => void;
    linkComponent?: CustomLinkComponent;
}
export declare const MenuItemBtn: React.FC<MenuItemBtnProps>;
