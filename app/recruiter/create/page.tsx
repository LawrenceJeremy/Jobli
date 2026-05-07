"use client";

import CreateJobForm from "@/components/features/jobs/create/CreateJobForm";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* HEADER */}
      <div className="w-full bg-white border-b px-6 py-4">
        <h1 className="text-lg font-semibold">
          Create Job Post
        </h1>
        <p className="text-sm text-gray-500">
          Fill in the details and preview your job in real time
        </p>
      </div>

      {/* FORM */}
      <div className="p-6">
        <CreateJobForm />
      </div>

    </div>
  );
}