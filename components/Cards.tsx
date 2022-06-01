import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Divider,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { BiLike, BiShareAlt, BiEdit } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";

const Data = [
  {
    id: 1,
    title: "Cause Of Environment",
    content:
      "Global warming is the long-term heating of Earth's climate system observed since the pre-industrial period (between 1850 and 1900) due to human activities, primarily fossil fuel burning, which increases heat-trapping greenhouse gas levels in Earth's atmosphere. Pollution is the introduction of contaminants into the natural environment that cause adverse change.[1] Pollution can take the form of any substance (solid, liquid, or gas) or energy (such as radioactivity, heat, sound, or light). Pollutants, the components of pollution, can be either foreign substances/energies or naturally occurring contaminants. Although environmental pollution can be caused by natural events, the word pollution generally implies that the contaminants have an anthropogenic source – that is, a source created by human activities. Pollution is often classed as point source or nonpoint source pollution. In 2015, pollution killed nine million people worldwide.[2][3] Major forms of pollution include air pollution, light pollution, litter, noise pollution, plastic pollution, soil contamination, radioactive contamination, thermal pollution, visual pollution, and water pollution.",
    avatar:
      "https://lh3.googleusercontent.com/a-/AOh14Gi-niaolq7-Wpc97EAD77WzhMpgcyHqeUD1q4Xdig=s360-p-rw-no",
    author: "Sakkurthi Sashank",
    data: "Feb 08, 2021",
  },
  {
    id: 1,
    title: "Cause Of Environment",
    content:
      "Global warming is the long-term heating of Earth's climate system observed since the pre-industrial period (between 1850 and 1900) due to human activities, primarily fossil fuel burning, which increases heat-trapping greenhouse gas levels in Earth's atmosphere. Pollution is the introduction of contaminants into the natural environment that cause adverse change.[1] Pollution can take the form of any substance (solid, liquid, or gas) or energy (such as radioactivity, heat, sound, or light). Pollutants, the components of pollution, can be either foreign substances/energies or naturally occurring contaminants. Although environmental pollution can be caused by natural events, the word pollution generally implies that the contaminants have an anthropogenic source – that is, a source created by human activities. Pollution is often classed as point source or nonpoint source pollution. In 2015, pollution killed nine million people worldwide.[2][3] Major forms of pollution include air pollution, light pollution, litter, noise pollution, plastic pollution, soil contamination, radioactive contamination, thermal pollution, visual pollution, and water pollution.",
    avatar:
      "https://lh3.googleusercontent.com/a-/AOh14Gi-niaolq7-Wpc97EAD77WzhMpgcyHqeUD1q4Xdig=s360-p-rw-no",
    author: "Sakkurthi Srinivasa rao",
    data: "Feb 08, 2021",
  },
];

export default function blogCard() {
  return (
    <Box style={{ height: "83vh" }} overflowY={"scroll"}>
      {Data.map((props) => (
        <Center py={2} px={4} key={props.id}>
          <Box
            maxW={"1150px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"md"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
          >
            <Stack mb={2} direction={"row"} spacing={4} align={"center"}>
              <Avatar
                src={
                  "https://lh3.googleusercontent.com/a-/AOh14Gi-niaolq7-Wpc97EAD77WzhMpgcyHqeUD1q4Xdig=s360-p-rw-no"
                }
              />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontWeight={600} fontFamily="Poppins">
                  {props.author}
                </Text>
                <Text color={"gray.500"}>{props.data}</Text>
              </Stack>
              <Button
                size={"xs"}
                _focus={{ boxShadow: "none" }}
                leftIcon={<AddIcon />}
                colorScheme="messenger"
              >
                Follow
              </Button>
            </Stack>
            <Stack>
              <Divider style={{ borderColor: "#938F8F" }} />
              <HStack justify={"space-between"}>
                <Heading
                  color={useColorModeValue("gray.700", "white")}
                  fontSize={"2xl"}
                  fontFamily={"body"}
                >
                  {props.title}
                </Heading>
                <HStack>
                  <Button
                    size={"sm"}
                    _focus={{ boxShadow: "none" }}
                    variant="ghost"
                  >
                    <BiEdit color={"#475569"} size={"20"} fontWeight={""} />
                  </Button>
                  <Button
                    size={"sm"}
                    _focus={{ boxShadow: "none" }}
                    variant="ghost"
                  >
                    <MdOutlineDelete
                      color={"#475569"}
                      size={"20"}
                      fontWeight={""}
                    />
                  </Button>
                </HStack>
              </HStack>
              <Text overflow={"hidden"} maxH={"100px"} color={"gray.600"}>
                {props.content}
              </Text>
            </Stack>
            <VStack align={"start"}>
              <Button
                colorScheme="blue"
                variant="link"
                _focus={{ boxShadow: "none" }}
              >
                <Text color={"#2563eb"}>...more</Text>
              </Button>
              <HStack fontFamily={"poppins"}>
                <Button
                  size={"sm"}
                  _focus={{ boxShadow: "none" }}
                  variant="ghost"
                  color={"#0284c7"}
                  leftIcon={
                    <BiLike color={"#0ea5e9"} size={"20"} fontWeight={""} />
                  }
                >
                  0
                </Button>
                <Button
                  size={"sm"}
                  _focus={{ boxShadow: "none" }}
                  color={"#ea580c"}
                  variant="ghost"
                  leftIcon={<BiCommentDetail size={"20"} color={"#f97316"} />}
                >
                  0
                </Button>
                <Button
                  size={"sm"}
                  _focus={{ boxShadow: "none" }}
                  variant="ghost"
                >
                  <BiShareAlt size={"20"} color={"#475569"} />
                </Button>
              </HStack>
            </VStack>
          </Box>
        </Center>
      ))}
    </Box>
  );
}
