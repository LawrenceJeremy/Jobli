import { Bookmark, Share } from "lucide-react";
import type { Job } from "./shared/jobs.types";

type Props = {
  job: Job;
  isSaved?: boolean;
  toggleSave?: (id: number) => void;
};

export default function JobPreview({
  job,
  isSaved = false,
  toggleSave,
}: Props) {
  return (
    <div className="flex flex-col h-full p-6 bg-white rounded-2xl shadow-sm">

      <h1 className="text-2xl font-bold text-gray-900">
        {job.title}
      </h1>

      <p className="text-sm text-gray-700 mt-2">
        {job.company}
      </p>

      <p className="text-sm text-gray-500 mt-1">
        {job.location} • {job.workMode}
      </p>

      {job.salary && (
        <p className="text-sm text-green-600 font-semibold mt-2">
          {job.salary}
        </p>
      )}

      <div className="flex items-center gap-2 mt-4">
        <button className="bg-yellow-500 text-white px-4 py-1.5 text-sm rounded-md font-semibold hover:bg-yellow-600 transition">
          Apply
        </button>

        <button
          onClick={() => toggleSave?.(job.id)}
          className="p-2 border rounded-md"
        >
          <Bookmark
            size={18}
            className={
              isSaved ? "fill-yellow-500 text-yellow-500" : "text-gray-500"
            }
          />
        </button>

        <button className="p-2 border rounded-md">
          <Share size={18} />
        </button>
      </div>

      <div className="border-t mt-5 pt-4 flex-1">
        <p className="text-gray-700">
          {job.description}
        </p>
      </div>

    </div>
  );
}