import {
  Box,
  Center,
  Text,
  Stack,
  useColorModeValue,
  Input,
  Textarea,
  Button,
  HStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function NewBlog() {
  const { data: session } = useSession();
  const [title, setTitle] = useState("");
  const [Content, setContent] = useState("");

  const handleTitle = (e: any) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handleContent = (e: any) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const PostData = () => {
    axios
      .post("/api/Post/post", {
        title: title,
        content: Content,
        email: session?.user?.email,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Center py={4} px={2}>
      <Box
        maxW={"1000"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        rounded={"md"}
        style={{
          border: "1px solid #cbd5e1 ",
        }}
        p={4}
        overflow={"hidden"}
      >
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            Blog
          </Text>
          <Input
            placeholder="Untitled"
            pl={"0.5"}
            size="lg"
            color={"#334155"}
            fontSize={{ base: "md", md: "lg", xl: "xl" }}
            fontFamily={"Open Sans"}
            variant={"unstyled"}
            value={title}
            onInput={handleTitle}
            required={true}
          />
          <Textarea
            paddingBottom={"96"}
            fontSize={{ base: "small", md: "sm", xl: "md" }}
            color={"gray.600"}
            fontFamily={"Open Sans"}
            placeholder="Content"
            variant={"unstyled"}
            value={Content}
            onInput={handleContent}
            required={true}
          />
          <HStack>
            <Button
              _focus={{ boxShadow: "none" }}
              onClick={() => {
                PostData();
              }}
              colorScheme="twitter"
            >
              Publish
            </Button>
            <Button _focus={{ boxShadow: "none" }} colorScheme="red">
              discharge
            </Button>
          </HStack>
        </Stack>
      </Box>
    </Center>
  );
}
