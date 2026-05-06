import { Job } from "@/app/page";
import { Bookmark, Share } from "lucide-react";

type Props = {
  job: Job;
  isSaved: boolean;
  toggleSave: (id: number) => void;
};

export default function JobPreview({ job, isSaved, toggleSave }: Props) {
  return (
    <div className="flex flex-col h-full p-6">
      {/* TITLE */}
      <h1 className="text-2xl font-bold text-gray-900 leading-snug">
        {job.title}
      </h1>

      {/* COMPANY */}
      <p className="text-sm text-gray-700 mt-2">{job.company}</p>

      {/* LOCATION + MODE */}
      <p className="text-sm text-gray-500 mt-1">
        {job.location} • {job.workMode}
      </p>

      {/* SALARY */}
      {job.salary && (
        <p className="text-sm text-green-600 font-semibold mt-2">
          {job.salary}
        </p>
      )}

      {/* ACTIONS (DESKTOP ONLY STRUCTURE) */}
      <div className="flex items-center gap-2 mt-4">
        {/* APPLY */}
        <button className="bg-yellow-500 text-white px-4 py-1.5 text-sm rounded-md font-semibold hover:bg-yellow-600 transition">
          Apply
        </button>

        {/* BOOKMARK */}
        <button
          onClick={() => toggleSave(job.id)}
          className="p-2 border rounded-md text-gray-600 hover:text-gray-900 transition flex items-center justify-center"
        >
          <Bookmark
            size={18}
            className={
              isSaved ? "fill-yellow-500 text-yellow-500" : "text-gray-500"
            }
          />
        </button>

        {/* SHARE */}
        <button className="p-2 border rounded-md text-gray-600 hover:text-gray-900 transition flex items-center justify-center">
          <Share size={18} />
        </button>
      </div>

      {/* DESCRIPTION */}
      <div className="border-t mt-5 pt-4 flex-1">
        <p className="text-gray-700 leading-relaxed">{job.description}</p>
      </div>
    </div>
  );
}
