import React, { useState } from "react";
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/core";
import { Button, Header } from "../../components";
import { Container, VacinaText, InputText } from "./style";
import { VacinaPropsAnimal } from "../../interfaces/Vacina.interface";

export default function Vacina() {
  const route = useRoute();
  const { title, image, nome, data } = route.params as VacinaPropsAnimal;
  console.log({ title, image, nome, data });
  const [nomeVacina, setNomeVacina] = useState(nome);
  const [dataVacina, setDataVacina] = useState(data);
  function nomeChange(item: string) {
    setNomeVacina(item);
  }
  function dataChange(item: string) {
    setDataVacina(item);
  }
  const navigation = useNavigation();
  function handleAnimal() {
    navigation.navigate("Animal");
  }

  return (
    <Container>
      <Header name={title} image={image} />
      <VacinaText>Vacinação</VacinaText>
      <InputText
        placeholder="nome"
        value={nomeVacina}
        onChangeText={(text) => nomeChange(text)}
      />
      <InputText
        placeholder="dia/mês/ano"
        value={dataVacina}
        onChangeText={(text) => dataChange(text)}
      />
      <Button size="define" title="Salvar" onPress={handleAnimal} />
    </Container>
  );
}
