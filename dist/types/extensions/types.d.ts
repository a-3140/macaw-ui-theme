import { ThemeType } from "../theme";
export declare enum ExtensionMessageType {
    BREADCRUMB_CLICK = 0,
    BREADCRUMB_SET = 1,
    THEME = 2
}
export interface BaseExtensionMessageData {
    type: ExtensionMessageType;
}
export type Breadcrumb = Record<"label" | "value", string>;
export interface BreadcrumbClickMessage extends BaseExtensionMessageData {
    breadcrumb: string;
}
export interface BreadcrumbChangeMessage extends BaseExtensionMessageData {
    breadcrumbs: Breadcrumb[];
}
export interface ThemeChangeMessage extends BaseExtensionMessageData {
    theme: ThemeType;
}
export interface ExtensionMessageEvent<T extends BaseExtensionMessageData> {
    data: T;
}
