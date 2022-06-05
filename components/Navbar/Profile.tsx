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
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { ProfileData } from "../../pages/api/Data/_ProfileData";

function Profile() {
  return (
    <Flex alignItems={"center"}>
      <Menu>
        <MenuButton transition="all 0.3s" _focus={{ boxShadow: "none" }}>
          <HStack>
            <Avatar size={"sm"} src={ProfileData().userImage || ""} />
            <VStack
              display={{ base: "none", md: "flex" }}
              alignItems="flex-start"
              spacing="1px"
              ml="2"
            >
              <Text fontSize="sm">{ProfileData().userName}</Text>
            </VStack>
            <Box display={{ base: "none", md: "flex" }}>
              <FiChevronDown />
            </Box>
          </HStack>
        </MenuButton>
        <MenuList
          bg={useColorModeValue("white", "gray.900")}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
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
