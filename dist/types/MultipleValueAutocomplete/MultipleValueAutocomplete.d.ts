import { PopperPlacementType } from "@material-ui/core/Popper";
import { StandardTextFieldProps } from "@material-ui/core/TextField";
import { UseComboboxGetItemPropsOptions } from "downshift";
import React from "react";
import { SyntheticChangeEvent } from "../../types/utils";
import { Choice } from "../Filter";
export interface MultipleValueAutocompleteProps extends Omit<StandardTextFieldProps, "onChange"> {
    children: (data: {
        getItemProps: (opts: UseComboboxGetItemPropsOptions<Choice>) => any;
        highlightedIndex: number;
        inputValue: string;
        choices: Choice[];
    }) => React.ReactNode | React.ReactNodeArray;
    className?: string;
    enableReinitialize?: boolean;
    styles?: React.CSSProperties;
    choices: Choice[];
    label?: string;
    loading?: boolean;
    popperPlacement?: PopperPlacementType;
    initialValue?: Choice[];
    onChange?: (event: SyntheticChangeEvent<string[]>) => void;
    onInputChange?: (value: string) => void;
    onScrollToBottom?: () => void;
}
export declare const MultipleValueAutocomplete: React.FC<MultipleValueAutocompleteProps>;
