import { useState } from "react";
import { color } from "styles";
import { Button, Modal, Text, TextInput, TextArea, Rating, Footer } from "../../components";

import { Container } from "./Form.styles";

const Form = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const closeModalHandler = () => setIsModalVisible(false);

  return (
    <>
      <Container>
        <Button onClick={() => setIsModalVisible(true)} color={color.magentaAccent}>
          Open Modal
        </Button>

        <Modal isOpen={isModalVisible} onClose={closeModalHandler}>
          <Text fontWeight="bold" type="h4">
            Deixa seu feedback
          </Text>

          <TextInput title="Seu nome:" placeholder="Ex.: João das Couves"/>

          <Rating title="Sua nota:" />

          <TextArea title="Sua mensagem:" placeholder="Ex.: Gostei muito da empresa. Me contrate!"/>
          
          <Footer>
            <Button color={color.darkMedium} onClick={closeModalHandler}>
              Cancelar
            </Button>

            <Button color={color.magentaAccent}>
              Enviar
            </Button>
          </Footer>
        </Modal>
      </Container>
    </>
  );
};

export default Form;
