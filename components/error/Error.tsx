import { Alert, AlertIcon, AlertDescription } from "@chakra-ui/react";
import React from "react";

export const NewBlogError = () => {
  return (
    <div>
      <Alert status="error" mt={"3"} height={"20"}>
        <AlertIcon />
        <AlertDescription>
          Your Title is must be greater than 10 words and Content is must be greater than 30
          words
        </AlertDescription>
      </Alert>
    </div>
  );
};
