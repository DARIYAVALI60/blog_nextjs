import { FcGoogle } from "react-icons/fc";
import { Button, Center, Text } from "@chakra-ui/react";
import { signIn } from "next-auth/react";

export default function Sign_in_Button() {
  return (
    <Center>
      <Button
        boxShadow={"md"}
        _focus={{ boxShadow: "none" }}
        _hover={{
          transform: "translateY(-2px)",
        }}
        variant={"outline"}
        leftIcon={<FcGoogle />}
        size={"sm"}
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        <Center>
          <Text fontSize={{base:"xs",md:"sm"}} fontWeight={"medium"} fontFamily={"Roboto"}>
            Sign
          </Text>
        </Center>
      </Button>
    </Center>
  );
}
