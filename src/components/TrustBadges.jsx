function TrustBadges() {
  const badges = [
    "✓ No Login Required",
    "✓ 100% Free",
    "✓ Privacy First",
    "✓ AI Powered",
  ];

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl py-3 px-4 text-center shadow-sm"
          >
            <p className="text-sm font-medium text-gray-700">
              {badge}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrustBadges;