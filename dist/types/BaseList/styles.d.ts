export type ListGridTemplate = string[] | Record<string, string[]>;
export declare const useGridTemplateStyles: (props: {
    width: ListGridTemplate;
}) => import("@material-ui/styles").ClassNameMap<"root">;
export declare const useStyles: (props?: any) => import("@material-ui/styles").ClassNameMap<"body" | "cell" | "row">;
