import {
  Avatar,
  Box,
  Flex,
  HStack,
  Menu,
  Text,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  VStack,
} from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import { FiChevronDown } from "react-icons/fi";
import { useSession } from "next-auth/react";

function Profile() {
  
  const { data: session } = useSession();
  const userName = session?.user?.name;
  const userImage = session?.user?.image;

  return (
    <Flex alignItems={"center"}>
      <Menu>
        <MenuButton transition="all 0.3s" _focus={{ boxShadow: "none" }}>
          <HStack>
            <Avatar size={"sm"} src={userImage || ""} />
            <VStack
              display={{ base: "none", md: "flex" }}
              alignItems="flex-start"
              spacing="1px"
              ml="2"
            >
              <Text fontSize="sm">{userName}</Text>
            </VStack>
            <Box display={{ base: "none", md: "flex" }}>
              <FiChevronDown />
            </Box>
          </HStack>
        </MenuButton>
        <MenuList bg={"white"} borderColor={"gray.200"}>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuDivider />
          <MenuItem onClick={() => signOut()}>Sign out</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default Profile;
