import { GoogleLoginForm } from "@/app/_components/form/google-login-form";
import { RegisterForm } from "@/app/_components/form/register-form";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <h1 className="fixed left-6 top-6 text-3xl font-bold tracking-tight md:left-8 md:top-8 md:text-4xl">
        Poin<span className="text-rose-500">thread</span>
      </h1>

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
