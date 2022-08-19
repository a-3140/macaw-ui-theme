/// <reference types="react" />
import { ListGridTemplate } from "./styles";
export declare const ListContext: import("react").Context<"body" | "head" | "foot">;
export declare const ListGridContext: import("react").Context<ListGridTemplate>;
export declare const useListContext: () => "body" | "head" | "foot";
export declare const useListGridContext: () => ListGridTemplate;
export declare function useGridStyles(): import("@material-ui/styles").ClassNameMap<"root">;
