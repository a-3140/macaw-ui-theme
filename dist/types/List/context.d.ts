/// <reference types="react" />
export type ListActionContextType = (hover: boolean) => void;
export declare const ListActionContext: import("react").Context<ListActionContextType | undefined>;
export declare const useListAction: () => ListActionContextType;
export interface UseTableActionHover {
    hover: boolean;
    props: Record<"onMouseLeave" | "onMouseEnter", () => void>;
}
