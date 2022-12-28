import React from "react";
import { FilterDetailedOptions, FilterLabels, FilterOptions } from "./types";
export type FilterProps = FilterOptions & FilterDetailedOptions;
export declare const Filter: React.FC<FilterProps>;
export interface FilterRowProps {
    first: boolean;
    name: string;
    labels: FilterLabels;
}
export declare const FilterRow: React.FC<FilterRowProps>;
