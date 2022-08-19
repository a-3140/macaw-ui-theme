import { TypographyProps } from "@material-ui/core/Typography";
import React from "react";
export interface DialogHeaderProps extends TypographyProps<"h5"> {
    onClose: () => void;
}
export declare const DialogHeader: React.FC<DialogHeaderProps>;
