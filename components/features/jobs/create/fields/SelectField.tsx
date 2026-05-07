type Option = {
  label: string;
  value: string;
};

type Props = {
  label?: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
};

export default function SelectField({
  label,
  value,
  options,
  onChange,
}: Props) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="text-sm text-gray-600">{label}</label>
      )}

      <select
        className="w-full border p-2 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
        value={value ?? ""}   // 🔥 FIX HERE
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select</option>

        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}