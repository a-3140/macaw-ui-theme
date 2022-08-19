import type { ClassNameMap, Styles, WithStylesOptions } from "@material-ui/styles/withStyles";
import { SaleorTheme } from "./createSaleorTheme/types";
import type { SaleorThemeContext } from "./types";
export declare function makeStyles<Props extends Record<string, any> = {}, ClassKey extends string = string>(styles: Styles<SaleorTheme, Props, ClassKey>, options?: Omit<WithStylesOptions<SaleorTheme>, "withTheme">): keyof Props extends never ? (props?: any) => ClassNameMap<ClassKey> : (props: Props) => ClassNameMap<ClassKey>;
export declare function useTheme(): SaleorTheme & SaleorThemeContext;
