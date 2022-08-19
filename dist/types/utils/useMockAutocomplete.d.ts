/// <reference types="node" />
export declare function useMockAutocomplete(choices: Array<Record<"label" | "value", string>>): {
    search: (query: string) => NodeJS.Timeout;
    results: {
        score: number;
        value: string;
        label: string;
    }[];
    more: () => void;
};
