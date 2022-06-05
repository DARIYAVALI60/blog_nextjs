import { Button, Text } from "@chakra-ui/react";
import React from "react";

export const MoreButton = () => {
  return (
    <div>
      <Button colorScheme="blue" variant="link" _focus={{ boxShadow: "none" }}>
        <Text color={"#2563eb"}>...more</Text>
      </Button>
    </div>
  );
};
