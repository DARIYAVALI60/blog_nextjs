import {
  Stack,
  Avatar,
  Text,
  Box,
  Divider,
  Heading,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React from "react";
import { DeleteButton } from "./ActionButton/DeleteButton";
import { EditButton } from "./ActionButton/EditButton";
import { Follow } from "./ActionButton/FollowButton";

interface CardProfileProps {
  image: string | undefined;
  name: string;
  data: string;
  follow: boolean;
  title: string;
  content: string;
}

export const CardContent: React.FC<CardProfileProps> = (props) => {
  const { data: session } = useSession();
  return (
    <div>
      <Stack mb={2} direction={"row"} spacing={2} align={"center"}>
        <Avatar size={"sm"} src={props.image} />
        <Stack direction={"column"} spacing={0} fontSize={"small"}>
          <Text color={"gray.700"} fontWeight={600} fontFamily={"Open Sans"}>
            {props.name}
          </Text>
          <Text color={"gray.500"}>{props.data}</Text>
        </Stack>
        <Follow follow={props.follow} />
        <Badge colorScheme="green">#Success</Badge>
      </Stack>
      <Stack>
        <Divider style={{ borderColor: "#938F8F" }} />
        <HStack justify={"space-between"}>
          <Heading color={"#334155"} fontSize={"2xl"} fontFamily={"Roboto"}>
            {props.title}
          </Heading>
          <Box>
            {session && session.user?.name === props.name ? (
              <>
                <EditButton title={props.title} content={props.content} />
                <DeleteButton />
              </>
            ) : (
              <></>
            )}
          </Box>
        </HStack>
        <Text
          overflow={"hidden"}
          fontSize={"sm"}
          maxH={"100px"}
          color={"gray.700"}
          fontFamily={"Open sans"}
        >
          {props.content}
        </Text>
      </Stack>
    </div>
  );
};
