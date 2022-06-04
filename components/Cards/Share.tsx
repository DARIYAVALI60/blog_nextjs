import {Button} from "@chakra-ui/react";
import React from "react";
import {BiShareAlt} from "react-icons/bi";

export default function Share() {
    return (
        <div>
            <Button
                size={"sm"}
                _focus={{boxShadow: "none"}}
                variant="ghost"
                _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "md",
                }}
            >
                <BiShareAlt size={"20"} color={"#475569"}/>
            </Button>
        </div>
    );
}
