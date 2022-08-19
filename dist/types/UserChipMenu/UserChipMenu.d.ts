import React from "react";
export interface UserChipProps {
    avatar: string | null;
    initials: string;
    name: string;
    subtext?: string;
    open?: boolean;
}
export declare const UserChipMenu: React.FC<UserChipProps>;
