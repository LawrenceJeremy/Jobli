"use client";

import { useState } from "react";
import JobFormLayout from "./JobFormlayout";
import JobPreview from "../JobPreview";

import TextField from "./fields/TextField";
import SelectField from "./fields/SelectField";
import TextAreaField from "./fields/TextAreaField";

import type { Job } from "../shared/jobs.types";

export default function CreateJobForm() {
  const [job, setJob] = useState<Job>({
    id: 0,
    title: "",
    company: "",
    location: "",
    workMode: "",
    employmentType: "",
    salary: "",
    description: "",
  });

  const update = (key: keyof Job, value: string) => {
    setJob((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // 💰 FORMAT SALARY INTO ₱
  const formatSalary = (value: string) => {
    if (!value) return "";
    return `₱${Number(value).toLocaleString()}`;
  };

  const form = (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Create Job</h1>

      <TextField
        label="Job Title"
        value={job.title}
        onChange={(v) => update("title", v)}
      />

      <TextField
        label="Company"
        value={job.company}
        onChange={(v) => update("company", v)}
      />

      <TextField
        label="Location"
        value={job.location}
        onChange={(v) => update("location", v)}
      />

      <SelectField
        label="Work Mode"
        value={job.workMode}
        onChange={(v) => update("workMode", v)}
        options={[
          { label: "Remote", value: "Remote" },
          { label: "On-site", value: "On-site" },
          { label: "Hybrid", value: "Hybrid" },
        ]}
      />

      <SelectField
        label="Employment Type"
        value={job.employmentType}
        onChange={(v) => update("employmentType", v)}
        options={[
          { label: "Full Time", value: "Full Time" },
          { label: "Part Time", value: "Part Time" },
          { label: "Internship", value: "Internship" },
          { label: "Contract", value: "Contract" },
        ]}
      />

      {/* 💰 SALARY (NUMBERS ONLY INPUT) */}
      <TextField
        label="Salary (numbers only)"
        value={job.salary}
        onChange={(v) => update("salary", v.replace(/[^0-9]/g, ""))}
        placeholder="20000"
      />

      <TextAreaField
        label="Description"
        value={job.description}
        onChange={(v) => update("description", v)}
      />
    </div>
  );

  const preview = (
    <JobPreview
      job={{
        ...job,
        salary: formatSalary(job.salary),
      }}
      isSaved={false}
      toggleSave={() => {}}
    />
  );

  return (
    <JobFormLayout
      form={form}
      preview={preview}
    />
  );
}