import * as v from "valibot";

export const RegisterSchema = v.object({
  username: v.pipe(
    v.string("Your username must be a string"),
    v.nonEmpty("Please enter a username"),
    v.minLength(1, "Username must be greater then 1 character"),
    v.maxLength(50, "Username must be less then 50 characters"),
  ),
  email: v.pipe(
    v.string("Your email must be a string"),
    v.nonEmpty("Please enter an email"),
    v.email("Invalid email format"),
  ),
  password: v.pipe(
    v.string("Your password must be a string"),
    v.nonEmpty("Please enter your password"),
    v.minLength(8, "Your password must have 8 characters or more"),
  ),
});

const SuccessResponseSchema = v.object({
  success: v.literal(true),
  message: v.string(),
  data: v.object({
    id: v.string(),
    username: v.string(),
    email: v.string(),
    accessToken: v.string(),
  }),
});

const ErrorResponseSchema = v.object({
  success: v.literal(false),
  error: v.string(),
  message: v.string(),
});

export const ApiResponseSchema = v.union(
  [SuccessResponseSchema, ErrorResponseSchema],
  "Invalid API response format",
);
