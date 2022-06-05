import { Button } from "@chakra-ui/react";
import { BiShareAlt } from "react-icons/bi";

export const ShareButton = () => {
  return (
    <div>
      <Button
        size={"xs"}
        _focus={{ boxShadow: "none" }}
        variant="ghost"
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "md",
        }}
      >
        <BiShareAlt size={"16"} color={"#475569"} />
      </Button>
    </div>
  );
};
