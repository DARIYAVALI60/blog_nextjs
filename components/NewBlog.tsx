import {
  Box,
  Center,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Input,
  Textarea,
} from "@chakra-ui/react";

export default function NewBlog() {
  return (
    <Center py={6} px={2}>
      <Box
        maxW={"1000"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        // boxShadow={"xl"}
        rounded={"md"}
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
            placeholder="Title"
            size="lg"
            color={"#334155"}
            fontSize={{ base: "md", md: "xl", xl: "2xl" }}
            fontFamily={"Poppins"}
          />
          <Textarea
            paddingBottom={"80"}
            fontSize={{ base: "small", md: "sm", xl: "md" }}
            color={"gray.600"}
            fontFamily={"Roboto"}
            placeholder="Content"
          />
          <input
            style={{ fontFamily: "Roboto", color: "#334155" }}
            type={"file"}
            accept={"image/*"}
          />
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar
            src={
              "https://lh3.googleusercontent.com/a-/AOh14Gi-niaolq7-Wpc97EAD77WzhMpgcyHqeUD1q4Xdig=s360-p-rw-no"
            }
          />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text color={"gray.700"} fontWeight={600} fontFamily={"Open Sans"}>
              Sakkurthi Sashank
            </Text>
            <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
