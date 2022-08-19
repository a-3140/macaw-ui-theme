/// <reference types="react" />
interface TableDataRow {
    name: string;
    calories: number;
}
export declare function useListStory(initialRowsPerPage?: number): {
    data: TableDataRow[];
    pageData: TableDataRow[];
    page: number;
    nextPage: () => void;
    previousPage: () => void;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    rowsPerPage: number;
    setRowsPerPage: import("react").Dispatch<import("react").SetStateAction<number>>;
    selected: string[];
    isRowSelected: (name: string) => boolean;
    toggleRow: (name: string) => void;
    toggleAll: () => void;
};
export {};
