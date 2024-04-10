"use client";
import React from "react";
import { Button } from "./ui/button";

import { SignIn } from "@clerk/clerk-react";

type Props = { text: string };

const SignInButton = ({ text }: Props) => {
  return (
    <Button
      onClick={() => {
        SignIn.open();
      }}
    >
      {text}
    </Button>
  );
};

export default SignInButton;
