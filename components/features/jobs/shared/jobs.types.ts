export type WorkMode = "Remote" | "On-site" | "Hybrid" | "";

export type EmploymentType =
  | "Full Time"
  | "Part Time"
  | "Internship"
  | "Contract"
  | "";

export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;

  workMode: "" | "Remote" | "On-site" | "Hybrid";
  employmentType: "" | "Full Time" | "Part Time" | "Internship" | "Contract";

  salary: string; // 🔥 keep ALWAYS string (not optional)
  description: string;
};