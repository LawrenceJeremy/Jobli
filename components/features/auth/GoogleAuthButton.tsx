// components/features/auth/GoogleAuthButton.tsx

import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc"

type Props = {
  label: string
}

export default function GoogleAuthButton({ label }: Props) {
  return (
    <Button variant="outline" className="w-full gap-2" type="button">
      <FcGoogle className="text-lg" />
      {label}
    </Button>
  )
}