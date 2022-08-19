import { BaseExtensionMessageData } from "./types";
export declare function sendMessageToDashboard<T extends BaseExtensionMessageData>(message: T, targetOrigin: string): void;
export declare function sendMessageToExtension<T extends BaseExtensionMessageData>(message: T, targetOrigin: string): void;
