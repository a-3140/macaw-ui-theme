import { TabsProps } from "@material-ui/core/Tabs";
import React from "react";
export declare const PageTabs: React.FC<Omit<TabsProps, "onChange"> & {
    onChange: (value: string) => void;
}>;
