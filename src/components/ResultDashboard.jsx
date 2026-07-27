function ResultDashboard({ result, onReset }) {
  const score = Number(result.score) || 0;

  let scoreColor = "text-red-600";
  let ringColor = "border-red-500";
  let status = "Needs Improvement";

  if (score >= 80) {
    scoreColor = "text-green-600";
    ringColor = "border-green-500";
    status = "Excellent";
  } else if (score >= 60) {
    scoreColor = "text-yellow-500";
    ringColor = "border-yellow-500";
    status = "Good";
  }

  return (
    <section className="bg-gray-50 min-h-screen py-8 px-4">

      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col sm:flex-row justify-between items-center gap-5">

          <div>

            <h1 className="text-3xl font-bold">
              Resume Analysis
            </h1>

            <p className="text-gray-500 mt-1">
              Your AI-powered ATS report is ready.
            </p>

          </div>

          <button
            onClick={onReset}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Analyze Another Resume
          </button>

        </div>

        {/* Score */}

        <div className="bg-white rounded-3xl shadow-lg mt-8 p-8">

          <div className="flex flex-col items-center">

            <div
              className={`w-44 h-44 rounded-full border-[12px] ${ringColor} flex items-center justify-center`}
            >

              <div className="text-center">

                <p className="text-gray-500 text-sm">
                  ATS Score
                </p>

                <h2 className={`text-5xl font-bold ${scoreColor}`}>
                  {score}
                </h2>

                <p className="text-gray-500">
                  /100
                </p>

              </div>

            </div>

            <p className={`mt-5 text-xl font-semibold ${scoreColor}`}>
              {status}
            </p>

          </div>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          {/* Strengths */}

          <div className="bg-white rounded-3xl shadow-lg p-6">

            <h2 className="text-green-600 text-xl font-bold mb-4">
              ✅ Strengths
            </h2>

            <ul className="space-y-3">

              {result.strengths?.map((item, index) => (

                <li
                  key={index}
                  className="bg-green-50 rounded-xl p-3"
                >
                  {item}
                </li>

              ))}

            </ul>

          </div>

          {/* Weaknesses */}

          <div className="bg-white rounded-3xl shadow-lg p-6">

            <h2 className="text-red-600 text-xl font-bold mb-4">
              ❌ Weaknesses
            </h2>

            <ul className="space-y-3">

              {result.weaknesses?.map((item, index) => (

                <li
                  key={index}
                  className="bg-red-50 rounded-xl p-3"
                >
                  {item}
                </li>

              ))}

            </ul>

          </div>

          {/* Suggestions */}

          <div className="bg-white rounded-3xl shadow-lg p-6">

            <h2 className="text-blue-600 text-xl font-bold mb-4">
              💡 Suggestions
            </h2>

            <ul className="space-y-3">

              {result.suggestions?.map((item, index) => (

                <li
                  key={index}
                  className="bg-blue-50 rounded-xl p-3"
                >
                  {item}
                </li>

              ))}

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ResultDashboard;