import { MenuItemProps } from "@material-ui/core/MenuItem";
import React from "react";
export interface UserChipMenuItemProps extends Omit<MenuItemProps, "button"> {
    leaveOpen?: boolean;
}
export declare const UserChipMenuItem: React.FC<UserChipMenuItemProps>;
