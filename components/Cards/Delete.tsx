import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { MdOutlineDelete } from "react-icons/md";
import React from "react";

export default function Delete() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        size={"sm"}
        _focus={{ boxShadow: "none" }}
        variant="ghost"
        onClick={onOpen}
      >
        <MdOutlineDelete color={"#475569"} size={"20"} fontWeight={""} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button color="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
