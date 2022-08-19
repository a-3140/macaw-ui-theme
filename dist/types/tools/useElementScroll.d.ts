/// <reference types="react" />
export declare type Position = Record<"x" | "y", number>;
export declare function isScrolledToBottom(anchor: HTMLElement, position: Position, offset?: number): boolean | undefined;
export declare function isScrolledToTop(anchor: HTMLElement, position: Position, offset?: number): boolean | undefined;
export interface UseElementScrollOpts<T extends HTMLElement> {
    anchor: T | null;
    position: Position | undefined;
}
export interface UseElementScroll<T extends HTMLElement> extends UseElementScrollOpts<T> {
    setAnchor: React.Dispatch<T | null>;
}
export declare function useElementScroll<T extends HTMLElement>(): UseElementScroll<T>;
