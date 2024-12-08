import Image from "next/image";

import { Button } from "@/app/_components/ui/button";
import google from "@/assets/icon/google.svg";

export const GoogleLoginForm = () => {
  return (
    <form action={""} className="space-y-2" autoComplete="off">
      <Button variant="outline" className="flex w-full items-center gap-3" disabled={false}>
        <Image src={google} alt="google logo" />
        <span>Continue with Google</span>
      </Button>
    </form>
  );
};
