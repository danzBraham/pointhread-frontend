import * as v from "valibot";

export const LoginSchema = v.object({
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
