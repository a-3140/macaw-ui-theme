import React from "react";
import { LayoutButtonProps } from "../LayoutButton";
export declare type BacklinkProps<T extends React.ElementType> = LayoutButtonProps<T> & {
    children: React.ReactNode;
    disabled?: boolean;
};
export declare const Backlink: {
    <T extends React.ElementType<any>>({ children, disabled, onClick, ...props }: BacklinkProps<T>): JSX.Element | null;
    displayName: string;
};
