import { Button } from "@chakra-ui/react";
import { BiCommentDetail } from "react-icons/bi";

export const CommentButton = () => {
  return (
    <div>
      <Button
        size={"xs"}
        _focus={{ boxShadow: "none" }}
        color={"#ea580c"}
        _hover={{
          transform: "translateY(-2px)",
        }}
        variant="ghost"
        leftIcon={<BiCommentDetail size={"16"} color={"#f97316"} />}
      >
        0
      </Button>
    </div>
  );
};
