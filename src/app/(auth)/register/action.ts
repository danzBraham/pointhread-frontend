"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import * as v from "valibot";

import { api } from "@/app/utils/http-client";

import { ApiResponseSchema, RegisterSchema } from "./schema";

export interface IState {
  message: string | null;
  formData: {
    username: string;
    email: string;
    password: string;
  };
  resetKey: number;
}

export async function register(prevState: IState, formData: FormData) {
  const formValues = Object.fromEntries(formData);

  try {
    const data = v.parse(RegisterSchema, formValues);

    const rawRes = await api.post("/auth/register", data);
    const res = v.parse(ApiResponseSchema, rawRes);

    if (!res.success) {
      return {
        message: res.message,
        formData: formValues as IState["formData"],
        resetKey: prevState.resetKey,
      };
    }

    (await cookies()).set("session", res.data.accessToken);
  } catch (error: unknown) {
    return {
      message: error instanceof Error ? error.message : "Something went wrong with registration",
      formData: formValues as IState["formData"],
      resetKey: prevState.resetKey,
    };
  }

  redirect("/");
}
