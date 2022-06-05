import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Divider,
  ModalCloseButton,
  ModalBody,
  VStack,
  Input,
  Textarea,
  ModalFooter,
} from "@chakra-ui/react";
import { BiEdit } from "react-icons/bi";

export const EditButton = (props: { title: string; content: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        size={"xs"}
        _focus={{ boxShadow: "none" }}
        variant="ghost"
        onClick={onOpen}
      >
        <BiEdit color={"#475569"} size={"16"} />
      </Button>

      <Modal onClose={onClose} size={"3xl"} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Blog</ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody>
            <VStack gap={4}>
              <Input
                placeholder="Title"
                defaultValue={props.title}
                size="lg"
                color={"#334155"}
                fontSize={"2xl"}
                fontFamily={"Roboto"}
                variant="unstyled"
              />
              <Textarea
                paddingBottom={"56"}
                fontSize={"md"}
                color={"gray.700"}
                fontFamily={"Open sans"}
                placeholder="Content"
                defaultValue={props.content}
                variant="unstyled"
              />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button _focus={{ boxShadow: "none" }} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
