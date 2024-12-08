"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import * as v from "valibot";

import { api } from "@/utils/http-client";

import { ApiResponseSchema, LoginSchema } from "./schema";

export interface LoginState {
  message: string | null;
  formData: {
    email: string;
    password: string;
  };
  resetKey: number;
}

export async function loginAction(_prevState: unknown, formData: FormData) {
  const formValues = Object.fromEntries(formData);

  try {
    const data = v.parse(LoginSchema, formValues);

    const rawRes = await api.post("/auth/login", data);
    const res = v.parse(ApiResponseSchema, rawRes);

    if (!res.success) {
      return {
        message: res.message,
        formData: formValues as LoginState["formData"],
        resetKey: 0,
      };
    }

    (await cookies()).set("session", res.data.accessToken);
  } catch (error: unknown) {
    return {
      message: error instanceof Error ? error.message : "Something went wrong with registration",
      formData: formValues as LoginState["formData"],
      resetKey: 0,
    };
  }

  redirect("/dashboard");
}
