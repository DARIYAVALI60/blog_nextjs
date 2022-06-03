import { Button } from "@chakra-ui/react";
import React from "react";
import { BiLike } from "react-icons/bi";

export default function Like() {
  const [like, setLike] = React.useState(false);
  return (
    <div>
      <Button
        size={"sm"}
        _focus={{ boxShadow: "none" }}
        variant="ghost"
        color={"#0284c7"}
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "md",
        }}
        leftIcon={<BiLike color={"#0ea5e9"} size={"20"} fontWeight={""} />}
        onClick={() => setLike(!like)}
      >
        0
      </Button>
    </div>
  );
}
