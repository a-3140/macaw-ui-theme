import React from "react";
import { FilterMenuLabels } from "./FilterMenu";
import { FilterData, FilterInput, FilterLabels } from "./types";
export interface FilterBarProps {
    initial?: FilterInput[];
    labels: Record<"header" | "addButton", string> & FilterMenuLabels & FilterLabels;
    onChange: (filterData: FilterData[]) => void;
    onClose: () => void;
}
export declare const FilterBar: React.FC<FilterBarProps>;
export default FilterBar;
