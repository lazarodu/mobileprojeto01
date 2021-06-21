import React from "react";
import { ButtonProps } from "../../interfaces/Button.interface";
import { ButtonStyle, ButtonStyleText, ImageStyle } from "./styles";

export default function ButtonAnimal({
  title,
  image,
  onPress,
  ...rest
}: ButtonProps) {
  return (
    <ButtonStyle onPress={onPress} {...rest}>
      <ImageStyle source={image} />
      <ButtonStyleText>{title}</ButtonStyleText>
    </ButtonStyle>
  );
}
