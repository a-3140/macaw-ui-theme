import React from "react";
import { AlertBaseProps } from "./AlertBase";
export interface AlertProps extends AlertBaseProps {
    close?: boolean;
    title?: string;
}
export declare const Alert: React.FC<AlertProps>;
