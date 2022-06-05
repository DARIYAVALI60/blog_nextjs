import { Button } from "@chakra-ui/react";
import React from "react";
import { BiLike } from "react-icons/bi";

export const LikeButton = () => {
  const [like, setLike] = React.useState(false);
  return (
    <div>
      <Button
        size={"xs"}
        _focus={{ boxShadow: "none" }}
        variant="ghost"
        color={"#0284c7"}
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "md",
        }}
        leftIcon={<BiLike color={"#0ea5e9"} size={"16"} fontWeight={""} />}
        onClick={() => setLike(!like)}
      >
        0
      </Button>
    </div>
  );
};
