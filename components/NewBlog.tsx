import {
  Box,
  Center,
  Text,
  Stack,
  useColorModeValue,
  Input,
  Textarea,
} from "@chakra-ui/react";

export default function NewBlog() {
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
            size="lg"
            color={"#334155"}
            fontSize={{ base: "md", md: "lg", xl: "xl" }}
            fontFamily={"Open Sans"}
            variant={"unstyled"}
          />
          <Textarea
            paddingBottom={"96"}
            fontSize={{ base: "small", md: "sm", xl: "md" }}
            color={"gray.600"}
            fontFamily={"Open Sans"}
            placeholder="Content"
            variant={"unstyled"}
          />
        </Stack>
      </Box>
    </Center>
  );
}
