import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

export const Follow = (props: { follow: any }) => {
  return (
    <Button
      size={"sm"}
      _focus={{ boxShadow: "none" }}
      leftIcon={props.follow ? <AddIcon /> : <CheckIcon />}
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "lg",
      }}
    >
      Follow
    </Button>
  );
};
