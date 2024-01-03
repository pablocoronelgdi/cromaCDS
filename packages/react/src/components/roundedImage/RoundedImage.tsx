import React, { useEffect, useState } from "react";
import { RoundedImageContainerStyled } from "./styles";
import { RoundedImageProps, RoundedImageSizeType } from "./types";
import { Icon } from "../icon";
import { removeAccents } from "../../utils/stringsUtils";

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
  icon
}) => {
  const [monogramCustom, setMonogramCustom] = useState<RoundedImageProps['monogram']>('AR');
  const maxLenghtMonogram = 2;

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
      {photo && !monogram &&
        <img
          src={photo.src}
          alt={photo.alt}
          height={photo.height}
          width={photo.width}
        />
      }
      {icon && !monogram && !photo &&
        <Icon size={icon.size} /* name={icon.name}  */ />
      }
    </RoundedImageContainerStyled>
  )
};

export default RoundedImage;
