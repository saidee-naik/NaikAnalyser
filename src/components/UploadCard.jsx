import { useState } from "react";

function UploadCard({ setLoading, setResult }) {
  const [file, setFile] = useState(null);

  async function handleAnalyze() {
    if (!file) {
      alert("Please select a resume first.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setLoading(true);

      const response = await  fetch(`${import.meta.env.VITE_API_URL}/analyze`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Analysis failed");
      }

      setResult(data);
    } catch (error) {
      console.error(error);
      alert(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 sm:p-8">

        <div className="text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center text-3xl">
            📄
          </div>

          <h2 className="mt-5 text-2xl font-bold">
            Upload Your Resume
          </h2>

          <p className="mt-2 text-gray-500 text-sm">
            PDF files only • Maximum size 5 MB
          </p>
        </div>

        <label
          htmlFor="resume"
          className="mt-8 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl p-8 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition"
        >
          <div className="text-5xl">📤</div>

          <p className="mt-4 font-semibold">
            Click to choose your resume
          </p>

          <p className="text-sm text-gray-500 mt-1">
            or drag & drop your PDF here
          </p>

          <input
            id="resume"
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>

        {file && (
          <div className="mt-6 rounded-xl bg-green-50 border border-green-200 p-4">
            <p className="font-semibold text-green-700">
              ✓ {file.name}
            </p>

            <p className="text-sm text-gray-600 mt-1">
              {(file.size / 1024).toFixed(2)} KB
            </p>
          </div>
        )}

        <button
          onClick={handleAnalyze}
          disabled={!file}
          className={`w-full mt-6 h-14 rounded-xl font-semibold text-lg transition ${
            file
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Analyze Resume
        </button>

      </div>
    </div>
  );
}

export default UploadCard;
