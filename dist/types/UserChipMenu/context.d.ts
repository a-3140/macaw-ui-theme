/// <reference types="react" />
export type UserChipMenuContextType = () => void;
export declare const UserChipMenuContext: import("react").Context<UserChipMenuContextType | undefined>;
export declare const useUserChipMenu: () => UserChipMenuContextType;
