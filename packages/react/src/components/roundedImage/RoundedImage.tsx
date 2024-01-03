import React, { useEffect, useState } from "react";
import { RoundedImageContainerStyled } from "./styles";
import { RoundedImageProps, RoundedImageSizeType } from "./types";
import { Icon } from "../icon";
import { Image } from "../image";
import { removeAccents } from "../../utils/stringsUtils";
import { IconSizeType } from "../icon/types";

export const getSize = (size?: RoundedImageSizeType) => {
  switch (size) {
    case "extra-small":
      return "32px";
    case "small":
      return "40px";
    case "medium":
      return "48px";
    case "large":
      return "72px";
    case "extra-large":
      return "80px";
    default:
      return "32px";
  }
};

const RoundedImage: React.FC<RoundedImageProps> = ({
  size = 'small',
  disabled = false,
  monogram,
  photo,
  iconName
}) => {
  const [monogramCustom, setMonogramCustom] = useState<RoundedImageProps['monogram']>('AR');
  const maxLenghtMonogram = 2;
  const iconSize: IconSizeType = (() => {
    switch (size) {
      case "extra-small":
        return "medium";
      case "small":
      case "medium":
        return "large";
      case "large":
      case "extra-large":
        return "extra-large";
      default:
        return "medium";
    }
  })();
  // @TODO: Esperar confirmación si solo se permiten letras, actualmente permite números en formato string.
  useEffect(() => {
    if (monogram && monogram.length <= maxLenghtMonogram) {
      setMonogramCustom(removeAccents(monogram.toUpperCase()));
    } else if (monogram && monogram.length >= maxLenghtMonogram) {
      setMonogramCustom(removeAccents(monogram?.charAt(0).concat(monogram?.charAt(1)).toUpperCase()));
    }
  }, [monogram]);

  return (
    <RoundedImageContainerStyled
      size={size}
      disabled={disabled}
    >
      {
        monogram && !photo &&
        <small>
          {monogramCustom}
        </small>
      }
      {photo?.image && photo?.alt && !monogram &&
        <Image
          alt={photo?.alt}
          height={photo.height}
          width={photo.width}
          title={photo?.alt}
          image={photo?.image}
        />
      }
      {!monogram && !photo &&
        <Icon size={iconSize} name={iconName || "person"} />
      }
    </RoundedImageContainerStyled>
  )
};

export default RoundedImage;
