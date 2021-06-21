import React from "react";
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/core";
import { Container, Message, Animais } from "./styles";
import { Header, ButtonAnimal } from "../../components";
import { AnimalProps } from "../../interfaces/Animal.interface";

export default function Animal() {
  const route = useRoute();
  const { title, image } = route.params as AnimalProps;
  const navigation = useNavigation();

  return (
    <Container>
      <Header name={title} image={image} />
    </Container>
  );
}
