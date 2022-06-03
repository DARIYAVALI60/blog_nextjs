import { Button } from "@chakra-ui/react";
import React from "react";
import { BiCommentDetail } from "react-icons/bi";

export default function Comment() {
  return (
    <div>
      <Button
        size={"sm"}
        _focus={{ boxShadow: "none" }}
        color={"#ea580c"}
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "md",
        }}
        variant="ghost"
        leftIcon={<BiCommentDetail size={"20"} color={"#f97316"} />}
      >
        0
      </Button>
    </div>
  );
}
