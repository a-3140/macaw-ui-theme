import { PopperPlacementType } from "@material-ui/core/Popper";
import { StandardTextFieldProps } from "@material-ui/core/TextField";
import { UseComboboxGetItemPropsOptions } from "downshift";
import React from "react";
import { SyntheticChangeEvent } from "../../types/utils";
import { Choice } from "../Filter";
export interface AutocompleteProps extends StandardTextFieldProps {
    children: (data: {
        getItemProps: (opts: UseComboboxGetItemPropsOptions<Choice>) => any;
        highlightedIndex: number;
        inputValue: string;
    }) => React.ReactNode | React.ReactNodeArray;
    className?: string;
    styles?: React.CSSProperties;
    choices: Choice[];
    label?: string;
    loading?: boolean;
    popperPlacement?: PopperPlacementType;
    onChange?: (event: SyntheticChangeEvent) => void;
    onInputChange?: (value: string) => void;
    onScrollToBottom?: () => void;
}
export declare const Autocomplete: React.FC<AutocompleteProps>;
