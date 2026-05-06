"use client";

import { useState } from "react";
import JobList from "@/components/features/jobs/JobList";
import JobPreview from "@/components/features/jobs/JobPreview";

export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  workMode: "Remote" | "On-site" | "Hybrid";
  salary?: string;
  description: string;
};

const mockJobs: Job[] = [
  {
    id: 1,
    title: "Software Engineer Trainees - open to FRESH GRADUATES",
    company: "Pointwest Innovations Corp",
    location: "Quezon City",
    workMode: "Remote",
    salary: "₱20,000 - ₱30,000",
    description: "Open to fresh graduates with strong fundamentals.",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Manila",
    workMode: "Hybrid",
    salary: "₱40,000 - ₱60,000",
    description: "Build modern UI systems using React and Tailwind.",
  },
];

export default function Page() {
  const [selectedJob, setSelectedJob] = useState<Job>(mockJobs[0]);
  const [savedJobs, setSavedJobs] = useState<number[]>([]);

  const toggleSave = (jobId: number) => {
    setSavedJobs((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId]
    );
  };

  const [titleQuery, setTitleQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  return (
    <div className="h-screen flex flex-col bg-gray-50">

      {/* 🔍 SEARCH BAR */}
      <div className="w-full border-b bg-white py-6">
        <div className="max-w-4xl mx-auto flex justify-center px-4">

          {/* RESPONSIVE CONTAINER */}
          <div className="flex flex-col md:flex-row w-full md:w-[720px] border rounded-xl overflow-hidden bg-white shadow-sm">

            {/* TITLE INPUT */}
            <input
              value={titleQuery}
              onChange={(e) => setTitleQuery(e.target.value)}
              placeholder="Job title or keyword"
              className="w-full md:flex-1 px-5 py-3 text-sm outline-none"
            />

            {/* DIVIDER */}
            <div className="h-px md:w-px md:h-auto bg-gray-200" />

            {/* LOCATION INPUT */}
            <input
              value={locationQuery}
              onChange={(e) => setLocationQuery(e.target.value)}
              placeholder="Location"
              className="w-full md:w-[200px] px-5 py-3 text-sm outline-none"
            />

            {/* BUTTON */}
            <button className="bg-yellow-500 text-white px-6 py-3 text-sm hover:bg-yellow-600 transition w-full md:w-auto flex items-center justify-center">
              Search
            </button>

          </div>

        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-1 overflow-hidden px-4 py-6 gap-4">

        {/* LEFT */}
        <div className="w-full md:w-1/2 border rounded-xl overflow-y-auto bg-white">
          <JobList
            jobs={mockJobs}
            selectedJob={selectedJob}
            onSelectJob={setSelectedJob}
            savedJobs={savedJobs}
            toggleSave={toggleSave}
          />
        </div>

        {/* RIGHT */}
        <div className="hidden md:block md:w-1/2 border rounded-xl overflow-y-auto bg-white">
          <JobPreview
            job={selectedJob}
            isSaved={savedJobs.includes(selectedJob.id)}
            toggleSave={toggleSave}
          />
        </div>

      </div>
    </div>
  );
}