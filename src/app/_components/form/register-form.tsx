"use client";

import { useActionState } from "react";

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { IState, register } from "@/app/(auth)/register/action";

const initialState: IState = {
  message: null,
  formData: {
    username: "",
    email: "",
    password: "",
  },
  resetKey: 0,
};

export const RegisterForm = () => {
  const [state, formAction, isPending] = useActionState(register, initialState);

  return (
    <form action={formAction} key={state?.resetKey} autoComplete="off" className="space-y-2">
      <Input
        type="text"
        name="username"
        placeholder="Username"
        defaultValue={state?.formData?.username}
      />
      <Input type="text" name="email" placeholder="Email" defaultValue={state?.formData?.email} />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        defaultValue={state?.formData?.password}
      />
      <Button disabled={isPending} className="w-full">
        {isPending ? "Registering..." : "Register"}
      </Button>
      {state?.message && <p className="text-red-500">{state?.message}</p>}
    </form>
  );
};
