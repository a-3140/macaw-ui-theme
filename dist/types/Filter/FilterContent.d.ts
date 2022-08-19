import React from "react";
import { FilterData, FilterLabels } from "./types";
export interface FilterContentProps {
    filter: FilterData;
    labels: FilterLabels;
}
export declare const FilterContent: React.FC<FilterContentProps>;
