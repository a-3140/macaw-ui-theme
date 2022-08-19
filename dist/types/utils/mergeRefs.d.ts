import type { Ref } from "react";
export declare function mergeRefs<T>(...refs: Array<Ref<T> | undefined>): (node: T) => void;
