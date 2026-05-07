type Props = {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

export default function TextAreaField({
  label,
  placeholder,
  value,
  onChange,
}: Props) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="text-sm text-gray-600">{label}</label>
      )}

      <textarea
        className="w-full border p-2 rounded-lg h-32 outline-none focus:ring-2 focus:ring-yellow-400"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}