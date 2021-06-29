import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { CastraProps } from "../../interfaces/Castra.interface";
import ButtonAction from "../ButtonAction";
import {
  CastraContainer,
  CastraHeader,
  CastraList,
  CastraText,
  CastraButton,
} from "./styles";
import colors from "../../styles/colors";
import Button from "../Button";

export default function Castracao({
  title,
  data,
  buttonEdit,
  buttonRemove,
  onPress,
  ...rest
}: CastraProps) {
  return (
    <CastraContainer>
      <CastraHeader>{title}</CastraHeader>
      <CastraList>
        <CastraText>{data}</CastraText>
        <CastraButton>
          <ButtonAction type="edit" onPress={buttonEdit} {...rest}>
            <FontAwesome name="edit" color={colors.white} />
          </ButtonAction>
          <ButtonAction type="remove" onPress={buttonRemove} {...rest}>
            <FontAwesome name="remove" color={colors.white} />
          </ButtonAction>
        </CastraButton>
      </CastraList>
      <Button size="define" title="Cadastrar" onPress={onPress} />
    </CastraContainer>
  );
}
