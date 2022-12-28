import React from "react";
export interface AvatarProps {
    /** User initials, e.g. John Smith = JS */
    initials: string;
    /** URL to the user avatar image */
    avatar?: string;
}
export declare const Avatar: React.FC<AvatarProps>;
