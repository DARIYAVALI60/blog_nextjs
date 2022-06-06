import { Box, Center, VStack, HStack } from "@chakra-ui/react";
import { CommentButton } from "./ActionButton/CommentButton";
import { ShareButton } from "./ActionButton/ShareButton";
import { LikeButton } from "./ActionButton/LikeButton";
import { MoreButton } from "./ActionButton/MoreButton";
import { CardContent } from "./CardContent";
import React from "react";

export default function BlogCard(props: { data: any }) {
  return (
    <Box style={{ height: "90vh" }} overflowY={"scroll"} bg={"gray.100"}>
      {props.data.map(
        (
          details: { id: string; name: string; image: string; Posts: any },
          index: number
        ) => {
          return (
            <div key={details.id}>
              {props.data[index].Posts?.map(
                (post: { id: string; title: string; content: string }) => {
                  return (
                    <>
                      <Center py={2} px={4} key={post.id}>
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
                            image={details.image}
                            name={details.name}
                            data={"15/05/2020"}
                            follow={true}
                            title={post.title}
                            content={post.content}
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
                    </>
                  );
                }
              )}
            </div>
          );
        }
      )}
    </Box>
  );
}
