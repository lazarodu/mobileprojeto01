import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { VacinaProps } from "../../interfaces/Vacina.interface";
import ButtonAction from "../ButtonAction";
import {
  VacinaContainer,
  VacinaHeader,
  VacinaList,
  VacinaText,
  VacinaButton,
} from "./styles";
import colors from "../../styles/colors";
import Button from "../Button";

export default function Vacinacao({
  title,
  vacinacao,
  buttonEdit,
  buttonRemove,
  onPress,
  ...rest
}: VacinaProps) {
  return (
    <VacinaContainer>
      <VacinaHeader>{title}</VacinaHeader>
      {vacinacao &&
        vacinacao.map((item, index) => (
          <VacinaList key={index}>
            <VacinaText>{item.nome}</VacinaText>
            <VacinaText>{item.data}</VacinaText>
            <VacinaButton>
              <ButtonAction type="edit" onPress={buttonEdit} {...rest}>
                <FontAwesome name="edit" color={colors.white} />
              </ButtonAction>
              <ButtonAction
                type="remove"
                onPress={() => buttonRemove(item)}
                {...rest}
              >
                <FontAwesome name="remove" color={colors.white} />
              </ButtonAction>
            </VacinaButton>
          </VacinaList>
        ))}
      <Button size="define" title="Cadastrar" onPress={onPress} />
    </VacinaContainer>
  );
}
