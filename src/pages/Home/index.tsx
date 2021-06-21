import React from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Container, Message, Animais } from "./styles";
import { Header, ButtonAnimal } from "../../components";
import data from "../../services/data";
import { AnimalProps } from "../../interfaces/Animal.interface";

export default function Home() {
  const navigation = useNavigation();
  function handleAnimal(item: AnimalProps) {
    navigation.navigate("Animal", { ...item });
  }
  return (
    <Container>
      <Header
        hello="Olá"
        name="Lázaro"
        image={require("../../../assets/img/lazaro.png")}
      />
      <Message>Você possui 2 animais adotados</Message>
      <Animais>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ButtonAnimal
              key={item.id}
              title={item.title}
              onPress={() => handleAnimal(item)}
              image={item.image}
            />
          )}
          numColumns={2}
        />
      </Animais>
    </Container>
  );
}
