import React, { useState } from "react";
import { useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/core";
import { Button, Header } from "../../components";
import { Container, CastraText, InputText } from "./style";
import { CastraPropsAnimal } from "../../interfaces/Castra.interface";

export default function Castra() {
  const route = useRoute();
  const { title, image, data } = route.params as CastraPropsAnimal;
  console.log({ title, image, data });
  const [dataCastra, setDataCastra] = useState(data);
  function dataChange(item: string) {
    setDataCastra(item);
  }
  const navigation = useNavigation();
  function handleAnimal() {
    navigation.navigate("Animal");
  }

  return (
    <Container>
      <Header name={title} image={image} />
      <CastraText>Castração</CastraText>
      <InputText
        placeholder="dia/mês/ano"
        value={dataCastra}
        onChangeText={(text) => dataChange(text)}
      />
      <Button size="define" title="Salvar" onPress={handleAnimal} />
    </Container>
  );
}
