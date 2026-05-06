"use client"
// components/features/auth/RegisterForm.tsx

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import GoogleAuthButton from "./GoogleAuthButton"

export default function RegisterForm() {
  return (
    <div className="space-y-4">

      <Input type="text" placeholder="Full Name" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />

      <Button className="w-full">
        Create Account
      </Button>

      {/* Divider */}
      <div className="flex items-center gap-2">
        <div className="h-px bg-muted flex-1" />
        <span className="text-xs text-muted-foreground">OR</span>
        <div className="h-px bg-muted flex-1" />
      </div>

      {/* UI ONLY BUTTON */}
      <GoogleAuthButton label="Continue with Google" />

    </div>
  )
}