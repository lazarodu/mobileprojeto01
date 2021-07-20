import React from "react";
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/core";
import { Alert } from "react-native";
import { Container, Message, Animais } from "./styles";
import { Header, Castracao, Vacinacao } from "../../components";
import { AnimalProps } from "../../interfaces/Animal.interface";
import { VacinaParamProps } from "../../interfaces/Vacina.interface";

export default function Animal() {
  const route = useRoute();
  const { title, image, castracao, vacinacao, id } =
    route.params as AnimalProps;
  const navigation = useNavigation();
  function handleCastraAnimal() {
    navigation.navigate("Castra", { title, image });
  }
  function handleVacinaAnimal() {
    navigation.navigate("Vacina", { title, image });
  }
  function castraEdit() {
    navigation.navigate("Castra", { title, image, data: castracao });
  }
  function vacinaEdit(item: VacinaParamProps) {
    navigation.navigate("Vacina", { title, image, ...item });
  }
  function castraRemove() {
    console.log("Castra", { title, image, data: castracao });
  }
  function vacinaRemove(item: VacinaParamProps) {
    console.log("Vacina", { title, image, ...item });
  }

  return (
    <Container>
      <Header name={title} image={image} />
      <Castracao
        title="Castração"
        onPress={handleCastraAnimal}
        buttonEdit={castraEdit}
        buttonRemove={castraRemove}
        data={castracao}
      />
      <Vacinacao
        title="Vacinação"
        onPress={handleVacinaAnimal}
        buttonEdit={vacinaEdit}
        buttonRemove={vacinaRemove}
        vacinacao={vacinacao}
      />
    </Container>
  );
}
