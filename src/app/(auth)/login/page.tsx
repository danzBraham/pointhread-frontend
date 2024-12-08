import { GoogleLoginForm } from "@/_components/form/google-login-form";
import { LoginForm } from "@/_components/form/login-form";
import { Brand } from "@/_components/ui/brand";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <Brand />

      <section className="w-full max-w-md space-y-6 p-6">
        <div>
          <h3 className="text-3xl font-medium">Log In</h3>
          <p className="">Hello, welcome back 👋</p>
        </div>

        <div className="space-y-4">
          <LoginForm />

          <div className="flex items-center justify-center gap-2">
            <div className="h-[1px] w-full rounded-full bg-slate-950"></div>
            <p className="text-sm">Or</p>
            <div className="h-[1px] w-full rounded-full bg-slate-950"></div>
          </div>

          <GoogleLoginForm />
        </div>

        <p>
          Don’t have an account?{" "}
          <a href="/register" className="font-semibold text-rose-500">
            Register
          </a>
        </p>
      </section>
    </main>
  );
}
