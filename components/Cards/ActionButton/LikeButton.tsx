import { Button } from "@chakra-ui/react";
import React from "react";
import { BiLike } from "react-icons/bi";
import { useEffect, useState } from "react";

export const LikeButton = () => {
  useEffect(() => {}, []);
  const [like, setLike] = useState(false);
  return (
    <div>
      <Button
        size={"xs"}
        _focus={{ boxShadow: "none" }}
        variant="ghost"
        color={"#0284c7"}
        _hover={{
          transform: "translateY(-2px)",
        }}
        leftIcon={<BiLike color={"#0ea5e9"} size={"16"} fontWeight={""} />}
        onClick={() => setLike(!like)}
      >
        0
      </Button>
    </div>
  );
};
