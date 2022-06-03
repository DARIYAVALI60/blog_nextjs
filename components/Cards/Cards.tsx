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
import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import Edit from "./Edit";
import Delete from "./Delete";
import Like from "./Like";
import Comment from "./Comment";

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
    follow: false,
  },
  {
    id: 2,
    title: "Education For Everyone",
    content:
      "A child’s right to education entails the right to learn. Yet, for too many children across the globe, schooling does not lead to learning.Over 600 million children and adolescents worldwide are unable to attain minimum proficiency levels in reading and mathematics, even though two thirds of them are in school. For out-of-school children, foundational skills in literacy and numeracy are further from grasp.",
    avatar:
      "https://lh3.googleusercontent.com/a-/AOh14GjYbTfeHJCvqqiCIm3O2Fgkj5wfDtad3zq5baaG4g=s360-p-rw-no",
    author: "Sakkurthi Srinivasa",
    data: "Feb 08, 2021",
    follow: true,
  },
  {
    id: 3,
    title: "Cause Of Environment",
    content:
      "Global warming is the long-term heating of Earth's climate system observed since the pre-industrial period (between 1850 and 1900) due to human activities, primarily fossil fuel burning, which increases heat-trapping greenhouse gas levels in Earth's atmosphere. Pollution is the introduction of contaminants into the natural environment that cause adverse change.[1] Pollution can take the form of any substance (solid, liquid, or gas) or energy (such as radioactivity, heat, sound, or light). Pollutants, the components of pollution, can be either foreign substances/energies or naturally occurring contaminants. Although environmental pollution can be caused by natural events, the word pollution generally implies that the contaminants have an anthropogenic source – that is, a source created by human activities. Pollution is often classed as point source or nonpoint source pollution. In 2015, pollution killed nine million people worldwide.[2][3] Major forms of pollution include air pollution, light pollution, litter, noise pollution, plastic pollution, soil contamination, radioactive contamination, thermal pollution, visual pollution, and water pollution.",
    avatar:
      "https://lh3.googleusercontent.com/a-/AOh14Gi-niaolq7-Wpc97EAD77WzhMpgcyHqeUD1q4Xdig=s360-p-rw-no",
    author: "Sakkurthi Srinivasa",
    data: "Feb 08, 2021",
    follow: false,
  },
  {
    id: 4,
    title: "Cause Of Environment",
    content:
      "Global warming is the long-term heating of Earth's climate system observed since the pre-industrial period (between 1850 and 1900) due to human activities, primarily fossil fuel burning, which increases heat-trapping greenhouse gas levels in Earth's atmosphere. Pollution is the introduction of contaminants into the natural environment that cause adverse change.[1] Pollution can take the form of any substance (solid, liquid, or gas) or energy (such as radioactivity, heat, sound, or light). Pollutants, the components of pollution, can be either foreign substances/energies or naturally occurring contaminants. Although environmental pollution can be caused by natural events, the word pollution generally implies that the contaminants have an anthropogenic source – that is, a source created by human activities. Pollution is often classed as point source or nonpoint source pollution. In 2015, pollution killed nine million people worldwide.[2][3] Major forms of pollution include air pollution, light pollution, litter, noise pollution, plastic pollution, soil contamination, radioactive contamination, thermal pollution, visual pollution, and water pollution.",
    avatar:
      "https://lh3.googleusercontent.com/a-/AOh14Gi-niaolq7-Wpc97EAD77WzhMpgcyHqeUD1q4Xdig=s360-p-rw-no",
    author: "Sakkurthi Srinivasa",
    data: "Feb 08, 2021",
    follow: true,
  },
  {
    id: 5,
    title: "Cause Of Environment",
    content:
      "Global warming is the long-term heating of Earth's climate system observed since the pre-industrial period (between 1850 and 1900) due to human activities, primarily fossil fuel burning, which increases heat-trapping greenhouse gas levels in Earth's atmosphere. Pollution is the introduction of contaminants into the natural environment that cause adverse change.[1] Pollution can take the form of any substance (solid, liquid, or gas) or energy (such as radioactivity, heat, sound, or light). Pollutants, the components of pollution, can be either foreign substances/energies or naturally occurring contaminants. Although environmental pollution can be caused by natural events, the word pollution generally implies that the contaminants have an anthropogenic source – that is, a source created by human activities. Pollution is often classed as point source or nonpoint source pollution. In 2015, pollution killed nine million people worldwide.[2][3] Major forms of pollution include air pollution, light pollution, litter, noise pollution, plastic pollution, soil contamination, radioactive contamination, thermal pollution, visual pollution, and water pollution.",
    avatar:
      "https://lh3.googleusercontent.com/a-/AOh14Gi-niaolq7-Wpc97EAD77WzhMpgcyHqeUD1q4Xdig=s360-p-rw-no",
    author: "Sakkurthi Srinivasa",
    data: "Feb 08, 2021",
    follow: false,
  },
  {
    id: 6,
    title: "Cause Of Environment",
    content:
      "Global warming is the long-term heating of Earth's climate system observed since the pre-industrial period (between 1850 and 1900) due to human activities, primarily fossil fuel burning, which increases heat-trapping greenhouse gas levels in Earth's atmosphere. Pollution is the introduction of contaminants into the natural environment that cause adverse change.[1] Pollution can take the form of any substance (solid, liquid, or gas) or energy (such as radioactivity, heat, sound, or light). Pollutants, the components of pollution, can be either foreign substances/energies or naturally occurring contaminants. Although environmental pollution can be caused by natural events, the word pollution generally implies that the contaminants have an anthropogenic source – that is, a source created by human activities. Pollution is often classed as point source or nonpoint source pollution. In 2015, pollution killed nine million people worldwide.[2][3] Major forms of pollution include air pollution, light pollution, litter, noise pollution, plastic pollution, soil contamination, radioactive contamination, thermal pollution, visual pollution, and water pollution.",
    avatar:
      "https://lh3.googleusercontent.com/a-/AOh14Gi-niaolq7-Wpc97EAD77WzhMpgcyHqeUD1q4Xdig=s360-p-rw-no",
    author: "Sakkurthi Srinivasa",
    data: "Feb 08, 2021",
    follow: false,
  },
];

export default function blogCard() {
  return (
    <Box style={{ height: "90vh" }} overflowY={"scroll"}>
      {Data.map((props) => (
        <Center py={2} px={4} key={props.id}>
          <Box
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"md"}
            maxW={"1200"}
            rounded={"md"}
            p={4}
            overflow={"hidden"}
          >
            <Stack mb={2} direction={"row"} spacing={2} align={"center"}>
              <Avatar size={"sm"} src={props.avatar} />
              <Stack direction={"column"} spacing={0} fontSize={"small"}>
                <Text color={"gray.700"} fontWeight={600} fontFamily={"Open Sans"}>
                  {props.author}
                </Text>
                <Text color={"gray.500"}>{props.data}</Text>
              </Stack>
              <Button
                size={"sm"}
                _focus={{ boxShadow: "none" }}
                leftIcon={props.follow ? <AddIcon /> : <CheckIcon />}
                // colorScheme="messenger"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
              >
                Follow
              </Button>
            </Stack>
            <Stack>
              <Divider style={{ borderColor: "#938F8F" }} />
              <HStack justify={"space-between"}>
                <Heading
                  color={"#334155"}
                  fontSize={"2xl"}
                  fontFamily={"Roboto"}
                >
                  {props.title}
                </Heading>
                <HStack>
                  <Edit title={props.title} content={props.content} />
                  <Delete />
                </HStack>
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
            <VStack align={"start"}>
              <Button
                colorScheme="blue"
                variant="link"
                _focus={{ boxShadow: "none" }}
              >
                <Text color={"#2563eb"}>...more</Text>
              </Button>
              <HStack fontFamily={"poppins"}>
                <Like />
                <Comment />
              </HStack>
            </VStack>
          </Box>
        </Center>
      ))}
    </Box>
  );
}
