import React from "react";
import { CustomLinkComponent, SidebarMenuItem } from "./types";
export interface MenuItemCommonProps {
    activeId: string;
    isMenuShrunk: boolean;
    menuItem: SidebarMenuItem;
}
export type MenuItemProps = MenuItemCommonProps & ({
    onClick: (menuItem: SidebarMenuItem) => void;
    linkComponent?: never;
} | {
    onClick?: never;
    linkComponent: CustomLinkComponent;
});
export declare const menuWidth = 210;
export declare const shrunkMenuWidth = 72;
export declare const MenuItem: React.FC<MenuItemProps>;
