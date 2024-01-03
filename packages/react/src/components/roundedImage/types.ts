import { ImageProps } from "../../types/image";
import { IconPropTypes } from "../icon/Icon";

export type RoundedImageSizeType = "extra-small" | "small" | "medium" | "large" | "extra-large";

export type RoundedImageProps = {
  monogram?: string;
  icon?: IconPropTypes;
  photo?: ImageProps;
  disabled?: boolean;
  size: RoundedImageSizeType;
};
