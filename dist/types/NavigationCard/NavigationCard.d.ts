import React from "react";
import { NavigationCardBaseProps } from "./NavigationCardBase";
export interface NavigationCardProps extends NavigationCardBaseProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}
export declare const NavigationCard: React.FC<NavigationCardProps>;
