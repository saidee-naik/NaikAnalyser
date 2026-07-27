import { useState } from "react";
import UploadCard from "./UploadCard";
import TrustBadges from "./TrustBadges";
import ResultDashboard from "./ResultDashboard";

function Hero() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  function resetAnalysis() {
    setResult(null);
  }

  if (loading) {
    return (
      <section className="py-20 flex justify-center">
        <div className="text-center">

          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

          <h2 className="text-2xl font-bold mt-6">
            Analyzing Resume...
          </h2>

          <p className="text-gray-500 mt-2">
            Please wait while AI reviews your resume.
          </p>

        </div>
      </section>
    );
  }

  if (result) {
    return (
      <ResultDashboard
        result={result}
        onReset={resetAnalysis}
      />
    );
  }

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">

      <div className="max-w-6xl mx-auto px-4 py-10">

        <div className="text-center">

          <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm">
            AI Powered ATS Resume Checker
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold">
            Analyze Your Resume
            <span className="text-blue-600"> with AI</span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Upload your resume and receive ATS feedback in seconds.
          </p>

        </div>

        <div className="mt-10">

          <UploadCard
            setLoading={setLoading}
            setResult={setResult}
          />

        </div>

        <div className="mt-8">
          <TrustBadges />
        </div>

      </div>

    </section>
  );
}

export default Hero;