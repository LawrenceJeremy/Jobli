"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"

export default function AuthLayout() {
  const [mode, setMode] = useState<"login" | "register">("login")

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <div className="w-full max-w-md space-y-6">

        {/* BRAND */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Jobli
          </h1>

          <p className="text-sm text-muted-foreground">
            Your simple job application companion
          </p>
        </div>

        {/* CARD (PURE CONTAINER ONLY) */}
        <Card className="shadow-lg">

          <CardHeader className="text-center space-y-1">
            <CardTitle>
              {mode === "login" ? "Welcome Back" : "Create Account"}
            </CardTitle>

            <p className="text-sm text-muted-foreground">
              {mode === "login"
                ? "Sign in to continue"
                : "Join Jobli and start applying faster"}
            </p>
          </CardHeader>

          {/* IMPORTANT: NO HEIGHT CONTROL HERE */}
          <CardContent>

            {mode === "login"
              ? <LoginForm />
              : <RegisterForm />
            }

            <Button
              variant="link"
              className="w-full mt-4"
              onClick={() =>
                setMode(mode === "login" ? "register" : "login")
              }
            >
              {mode === "login"
                ? "No account? Sign up"
                : "Already have an account? Sign in"}
            </Button>

          </CardContent>

        </Card>

      </div>
    </div>
  )
}