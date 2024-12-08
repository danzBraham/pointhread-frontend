"use client";

import { useActionState } from "react";

import { Button } from "@/_components/ui/button";
import { Input } from "@/_components/ui/input";
import { loginAction, LoginState } from "@/app/(auth)/login/action";

const initialState: LoginState = {
  message: null,
  formData: {
    email: "",
    password: "",
  },
  resetKey: 0,
};

export const LoginForm = () => {
  const [state, formAction, isPending] = useActionState(loginAction, initialState);

  return (
    <form action={formAction} key={state?.resetKey} autoComplete="off" className="space-y-2">
      <Input type="text" name="email" placeholder="Email" defaultValue={state?.formData?.email} />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        defaultValue={state?.formData?.password}
      />
      <Button disabled={isPending} className="w-full">
        {isPending ? "Log In..." : "Log In"}
      </Button>
      {state?.message && <p className="text-rose-500">{state?.message}</p>}
    </form>
  );
};
