"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import * as v from "valibot";

import { api } from "@/utils/http-client";

import { ApiResponseSchema, RegisterSchema } from "../register/schema";

export interface RegisterState {
  message: string | null;
  formData: {
    username: string;
    email: string;
    password: string;
  };
  resetKey: number;
}

export async function registerAction(_prevState: unknown, formData: FormData) {
  const formValues = Object.fromEntries(formData);

  try {
    const data = v.parse(RegisterSchema, formValues);

    const rawRes = await api.post("/auth/register", data);
    const res = v.parse(ApiResponseSchema, rawRes);

    if (!res.success) {
      return {
        message: res.message,
        formData: formValues as RegisterState["formData"],
        resetKey: 0,
      };
    }

    (await cookies()).set("session", res.data.accessToken);
  } catch (error: unknown) {
    return {
      message: error instanceof Error ? error.message : "Something went wrong with registration",
      formData: formValues as RegisterState["formData"],
      resetKey: 0,
    };
  }

  redirect("/dashboard");
}
