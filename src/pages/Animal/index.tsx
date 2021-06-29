import React from "react";
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/core";
import { Container, Message, Animais } from "./styles";
import { Header, Castracao } from "../../components";
import { AnimalProps } from "../../interfaces/Animal.interface";

export default function Animal() {
  const route = useRoute();
  const { title, image, castracao } = route.params as AnimalProps;
  const navigation = useNavigation();
  function handleAnimal() {
    navigation.navigate("Home");
  }
  function CastraEdit() {
    navigation.navigate("Login");
  }
  function CastraRemove() {
    navigation.navigate("Cadastrar");
  }

  return (
    <Container>
      <Header name={title} image={image} />
      <Castracao
        title="Castração"
        onPress={handleAnimal}
        buttonEdit={CastraEdit}
        buttonRemove={CastraRemove}
        data={castracao}
      />
    </Container>
  );
}
