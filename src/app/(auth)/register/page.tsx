import { GoogleLoginForm } from "@/_components/form/google-login-form";
import { RegisterForm } from "@/_components/form/register-form";
import { Brand } from "@/_components/ui/brand";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <Brand />

      <section className="w-full max-w-md space-y-6 p-6">
        <div>
          <h3 className="text-3xl font-medium">Register</h3>
          <p className="">Create an account to continue</p>
        </div>

        <div className="space-y-4">
          <RegisterForm />

          <div className="flex items-center justify-center gap-2">
            <div className="h-[1px] w-full rounded-full bg-slate-950"></div>
            <p className="text-sm">Or</p>
            <div className="h-[1px] w-full rounded-full bg-slate-950"></div>
          </div>

          <GoogleLoginForm />
        </div>

        <p>
          Already have an account?{" "}
          <a href="/login" className="font-semibold text-rose-500">
            Log In
          </a>
        </p>
      </section>
    </main>
  );
}
