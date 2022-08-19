import React from "react";
export declare type BacklinkContextType = React.RefObject<HTMLDivElement>;
export declare const BacklinkContext: React.Context<BacklinkContextType | undefined>;
export declare const useBacklink: () => BacklinkContextType;
export declare const BacklinkProvider: React.FC;
