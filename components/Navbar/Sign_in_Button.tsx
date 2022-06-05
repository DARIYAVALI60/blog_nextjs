import { FcGoogle } from "react-icons/fc";
import { Button, Center, Text } from "@chakra-ui/react";
import { signIn } from "next-auth/react";

export default function Sign_in_Button() {
  return (
    <Center p={2}>
      <Button
        boxShadow={"md"}
        _focus={{ boxShadow: "none" }}
        _hover={{
          transform: "translateY(-2px)",
        }}
        variant={"outline"}
        leftIcon={<FcGoogle />}
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        <Center>
          <Text fontWeight={"medium"} fontFamily={"Roboto"}>
            Sign
          </Text>
        </Center>
      </Button>
    </Center>
  );
}