"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import GoogleAuthButton from "./GoogleAuthButton"

type FormData = {
  full_name: string
  email: string
  password: string
  company_name: string
  industry: string
  location: string
}

export default function RegisterForm() {
  const [step, setStep] = useState(1)

  const [form, setForm] = useState<FormData>({
    full_name: "",
    email: "",
    password: "",
    company_name: "",
    industry: "",
    location: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const next = () => setStep((s) => Math.min(s + 1, 3))
  const back = () => setStep((s) => Math.max(s - 1, 1))

  const finish = () => {
    console.log("FINAL DATA:", form)
  }

  return (
    <div className="space-y-4">

      {/* ================= STEP 1: PROFILE ================= */}
      {step === 1 && (
        <>
          <Input
            name="full_name"
            placeholder="Full Name"
            value={form.full_name}
            onChange={handleChange}
          />

          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
        </>
      )}

      {/* ================= STEP 2: COMPANY ================= */}
      {step === 2 && (
        <>
          <Input
            name="company_name"
            placeholder="Company Name"
            value={form.company_name}
            onChange={handleChange}
          />

          <Input
            name="industry"
            placeholder="Industry"
            value={form.industry}
            onChange={handleChange}
          />

          <Input
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
          />
        </>
      )}

      {/* ================= STEP 3: REVIEW ================= */}
      {step === 3 && (
        <div className="text-sm space-y-3 text-muted-foreground">

          <p className="font-medium text-foreground">
            Check your details:
          </p>

          <div className="space-y-1">
            <p><strong>Full Name:</strong> {form.full_name || "-"}</p>
            <p><strong>Email:</strong> {form.email || "-"}</p>
            <p><strong>Password:</strong> {"-"}</p>
          </div>

          <div className="space-y-1 pt-2">
            <p><strong>Company Name:</strong> {form.company_name || "-"}</p>
            <p><strong>Industry:</strong> {form.industry || "-"}</p>
            <p><strong>Location:</strong> {form.location || "-"}</p>
          </div>

          <div className="pt-2 space-y-1">
            <p>✔ Profile Info</p>
            <p>✔ Company Info</p>
            <p>Everything looks correct before finishing.</p>
          </div>

        </div>
      )}

      {/* ================= BUTTONS ================= */}
      <div className="space-y-2 pt-2">

        {/* NEXT / FINISH */}
        {step < 3 && (
          <Button className="w-full" type="button" onClick={next}>
            Next
          </Button>
        )}

        {step === 3 && (
          <Button className="w-full" type="button" onClick={finish}>
            Finish Setup
          </Button>
        )}

        {/* BACK */}
        {step > 1 && (
          <Button
            className="w-full"
            variant="outline"
            type="button"
            onClick={back}
          >
            Back
          </Button>
        )}

      </div>

      {/* GOOGLE ONLY ON STEP 1 */}
      {step === 1 && (
        <>
          <div className="flex items-center gap-2">
            <div className="h-px bg-muted flex-1" />
            <span className="text-xs text-muted-foreground">OR</span>
            <div className="h-px bg-muted flex-1" />
          </div>

          <GoogleAuthButton label="Continue with Google" />
        </>
      )}

    </div>
  )
}