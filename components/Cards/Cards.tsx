import { Box, Center, VStack, HStack } from "@chakra-ui/react";
import { BlogData } from "../../pages/api/Data/_BlogData";
import { CommentButton } from "./ActionButton/CommentButton";
import { ShareButton } from "./ActionButton/ShareButton";
import { LikeButton } from "./ActionButton/LikeButton";
import { MoreButton } from "./ActionButton/MoreButton";
import { CardContent } from "./CardProfile";

export default function BlogCard() {
  return (
    <Box style={{ height: "90vh" }} overflowY={"scroll"} bg={"gray.100"}>
      {BlogData.map((data) => (
        <Center py={2} px={4} key={data.id}>
          <Box
            w={"full"}
            bg={"white"}
            boxShadow={"md"}
            maxW={"1200"}
            rounded={"md"}
            p={4}
            overflow={"hidden"}
          >
            <CardContent
              avatar={data.avatar}
              author={data.author}
              data={data.date}
              follow={data.follow}
              title={data.title}
              content={data.content}
            />
            <VStack align={"start"}>
              <MoreButton />
              <HStack fontFamily={"poppins"}>
                <LikeButton />
                <CommentButton />
                <ShareButton />
              </HStack>
            </VStack>
          </Box>
        </Center>
      ))}
    </Box>
  );
}
