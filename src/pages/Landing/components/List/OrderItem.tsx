import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input, Modal,
  ModalBody, ModalCloseButton,
  ModalContent, ModalFooter,
  ModalHeader,
  ModalOverlay, Select, useDisclosure
} from "@chakra-ui/react";

export const OrderItem = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      <Button onClick={onOpen} colorScheme='green' bg={'green.400'} mr={3} borderRadius='25px'>Passer le commande</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Passer votre commande</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nom du client</FormLabel>
              <Input ref={initialRef} placeholder='Votre nom....' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Adresse</FormLabel>
              <Input placeholder='Adresse' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Plat à commander</FormLabel>
              <Select placeholder=''>
                <option value='option1'>Kopozé</option>
                <option value='option2'>Riz cantonnais</option>
                <option value='option3'>Chocolat chaud</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Téléphone </FormLabel>
              <Input placeholder='+261 34 20 258 45' type={'number'} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Quantité</FormLabel>
              <Input type={'number'} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='green' bg={'green.400'} mr={3} borderRadius='25px'>
              Confirmer
            </Button>
            <Button onClick={onClose} borderRadius='25px'>Annuler</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
