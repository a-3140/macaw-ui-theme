import { BaseExtensionMessageData, ExtensionMessageEvent } from "./types";
export declare function useExtensionMessage<T extends BaseExtensionMessageData>(handle: (message: ExtensionMessageEvent<T>) => void): void;
