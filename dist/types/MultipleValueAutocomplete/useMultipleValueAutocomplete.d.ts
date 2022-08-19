/// <reference types="react" />
import { UseComboboxGetItemPropsOptions } from "downshift";
import { SyntheticChangeEvent } from "../../types/utils";
import { Choice } from "../Filter";
export interface UseMultipleValueAutocomplete {
    choices: Choice[];
    enableReinitialize?: boolean;
    name?: string;
    initialValue: Choice[];
    onChange?: (event: SyntheticChangeEvent<string[]>) => void;
    onInputChange?: (value: string) => void;
}
declare function useMultipleValueAutocomplete({ choices, enableReinitialize, initialValue, name, onChange, onInputChange, }: UseMultipleValueAutocomplete): {
    anchor: import("react").MutableRefObject<HTMLDivElement | undefined>;
    comboboxProps: any;
    filteredChoices: Choice[];
    getItemProps: (options: UseComboboxGetItemPropsOptions<Choice>) => any;
    getSelectedItemProps: (options: import("downshift").UseMultipleSelectionGetSelectedItemPropsOptions<Choice>) => any;
    getToggleButtonProps: (options?: import("downshift").UseComboboxGetToggleButtonPropsOptions | undefined) => any;
    highlightedIndex: number;
    inputProps: any;
    inputRef: (node: HTMLInputElement | undefined) => void;
    inputValue: string;
    inputWidth: number;
    isOpen: boolean;
    labelProps: any;
    menuProps: any;
    ref: (node: HTMLDivElement | undefined) => void;
    removeSelectedItem: (item: Choice) => void;
    selectedItems: Choice[];
};
export default useMultipleValueAutocomplete;
