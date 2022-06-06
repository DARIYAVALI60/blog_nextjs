import { Alert, AlertIcon, AlertDescription } from "@chakra-ui/react";
import React from "react";

export const NewBlogError = () => {
  return (
    <div>
      <Alert status="error" height={"10"}>
        <AlertIcon />
        <AlertDescription>
          Your Title is greater than 10 words and Content is greater than 30
          words
        </AlertDescription>
      </Alert>
    </div>
  );
};
