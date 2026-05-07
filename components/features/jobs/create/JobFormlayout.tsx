export default function JobFormLayout({
  form,
  preview,
}: {
  form: React.ReactNode;
  preview: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 h-full">

      {/* LEFT */}
      <div className="bg-white p-5 rounded-2xl shadow-sm">
        {form}
      </div>

      {/* RIGHT */}
      <div className="bg-gray-50 p-5 rounded-2xl">
        <h2 className="text-sm text-gray-500 mb-3">Live Preview</h2>
        {preview}
      </div>

    </div>
  );
}