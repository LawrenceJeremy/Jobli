import { Job } from "@/app/page";
import { Bookmark } from "lucide-react";

type Props = {
  jobs: Job[];
  selectedJob: Job;
  onSelectJob: (job: Job) => void;
  savedJobs: number[];
  toggleSave: (id: number) => void;
};

export default function JobList({
  jobs,
  selectedJob,
  onSelectJob,
  savedJobs,
  toggleSave,
}: Props) {
  return (
    <div className="p-4 space-y-3">

      <h2 className="text-sm font-semibold text-gray-500 mb-2">
        Jobs
      </h2>

      {jobs.map((job) => {
        const isActive = selectedJob.id === job.id;
        const isSaved = savedJobs.includes(job.id);

        return (
          <div
            key={job.id}
            onClick={() => onSelectJob(job)}
            className={`p-4 border rounded-lg cursor-pointer transition ${
              isActive
                ? "border-yellow-500 bg-yellow-50"
                : "hover:bg-gray-50"
            }`}
          >
            <div className="flex items-start justify-between">

              <h3 className="font-semibold text-gray-800">
                {job.title}
              </h3>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSave(job.id);
                }}
              >
                <Bookmark
                  size={18}
                  className={`transition ${
                    isSaved
                      ? "fill-yellow-500 text-yellow-500"
                      : "text-gray-400"
                  }`}
                />
              </button>

            </div>

            <p className="text-sm text-gray-600 mt-1">
              {job.company} • {job.location}
            </p>

            <p className="text-xs text-gray-500 mt-1">
              {job.workMode}
            </p>

          </div>
        );
      })}
    </div>
  );
}