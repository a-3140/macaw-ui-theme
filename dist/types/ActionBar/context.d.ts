import React from "react";
declare type AnchorFunction = {
    (el: HTMLDivElement): void;
    current: HTMLDivElement | null;
};
export interface ActionBarContextType {
    anchor: AnchorFunction;
}
export declare const ActionBarContext: React.Context<ActionBarContextType | undefined>;
export declare const useActionBar: () => ActionBarContextType;
export declare const ActionBarProvider: React.FC;
export {};
