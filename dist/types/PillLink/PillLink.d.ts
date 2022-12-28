import { OverridableComponent, OverrideProps } from "@material-ui/core/OverridableComponent";
import React from "react";
import { UserInteraction } from "../../types/utils";
export interface PillLinkInnerProps {
    className?: string;
    children?: React.ReactNode;
    state?: UserInteraction;
}
export interface PillLinkTypeMap<P = {}, D extends React.ElementType = "a"> {
    props: P & PillLinkInnerProps;
    classKey: never;
    defaultComponent: D;
}
export type PillLinkProps<D extends React.ElementType = PillLinkTypeMap["defaultComponent"], P = {}> = OverrideProps<PillLinkTypeMap<P, D>, D>;
export declare const PillLink: OverridableComponent<PillLinkTypeMap<{}, "a">>;
