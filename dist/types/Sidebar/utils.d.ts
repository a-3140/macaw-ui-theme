import { CustomLinkComponent, SidebarMenuItem } from "./types";
export declare const getLinkProps: (menuItem: SidebarMenuItem) => {
    href: string | undefined;
    target: string;
} | {
    href: string;
    target?: undefined;
} | {
    href?: undefined;
    target?: undefined;
};
export declare const getLinkComponent: (menuItem: SidebarMenuItem, customComponent?: CustomLinkComponent | undefined) => "a" | "button" | CustomLinkComponent;
