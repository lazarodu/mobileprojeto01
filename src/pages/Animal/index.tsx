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
    navigation.navigate("Castra", { title, image, castracao });
  }
  function handleVacinaAnimal() {
    navigation.navigate("Castra");
  }
  function CastraEdit() {
    navigation.navigate("Login");
  }
  function VacinaEdit() {
    navigation.navigate("Login");
  }
  const castraRemoveAlert = () =>
    Alert.alert(
      "Remoção",
      "Tem certeza que deseja remover a data de castração?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
        },
        { text: "OK", onPress: () => console.log(id, castracao) },
      ],
      { cancelable: false }
    );
  const vacinaRemoveAlert = (item: VacinaParamProps) =>
    Alert.alert(
      "Remoção",
      "Tem certeza que deseja remover a vacina cadastrada?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
        },
        { text: "OK", onPress: () => console.log(item) },
      ],
      { cancelable: false }
    );

  return (
    <Container>
      <Header name={title} image={image} />
      <Castracao
        title="Castração"
        onPress={handleCastraAnimal}
        buttonEdit={CastraEdit}
        buttonRemove={castraRemoveAlert}
        data={castracao}
      />
      <Vacinacao
        title="Vacinação"
        onPress={handleVacinaAnimal}
        buttonEdit={VacinaEdit}
        buttonRemove={vacinaRemoveAlert}
        vacinacao={vacinacao}
      />
    </Container>
  );
}
