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
import {MdOutlineDelete} from "react-icons/md";
import React from "react";

export default function Delete() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <>
            <Button
                size={"sm"}
                _focus={{boxShadow: "none"}}
                variant="ghost"
                onClick={onOpen}
            >
                <MdOutlineDelete color={"#475569"} size={"20"} fontWeight={""}/>
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Delete Blog</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody
                        color={"red.500"}
                        fontFamily={"Open Sans"}
                        fontWeight={"normal"}
                        textAlign={"center"}
                    >
                        Warning the Blog Cannot be recovered after deletion
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            _focus={{boxShadow: "none"}}
                            colorScheme={"green"}
                            mr={3}
                            onClick={onClose}
                            size='sm'
                        >
                            Close
                        </Button>
                        <Button
                            _focus={{boxShadow: "none"}}
                            colorScheme={"red"}
                            variant={"solid"}
                            size='sm'
                        >
                            Delete
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
