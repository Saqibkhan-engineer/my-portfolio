export default function TagScroll() {
  const row1 = [
    "Workshop Speaker at NIT", "21+ Platforms", "190+ Countries",
    "Data Analyst", "Business Intelligence", "SQL Optimization", "Python"
  ];
  const row2 = [
    "Workshop Speaker at NIT", "21+ Platforms", "190+ Countries",
    "Data Analyst", "Business Intelligence", "SQL Optimization", "Python"
  ];

  // duplicate arrays to ensure smooth infinite scrolling
  const renderTags = (tags: string[]) => {
    return [...tags, ...tags, ...tags].map((tag, i) => (
      <div
        key={i}
        className="shrink-0 text-white border border-white/20 rounded-full px-4 py-1.5 md:px-6 md:py-2 text-sm md:text-base whitespace-nowrap bg-black/20"
      >
        {tag}
      </div>
    ));
  };

  return (
    <section className="bg-[#111111] py-16 overflow-hidden border-t border-white/5 relative z-20">
      <div className="flex flex-col gap-6 relative">
        <div className="flex gap-4 w-[max-content] animate-scroll-left">
          {renderTags(row1)}
        </div>
        <div className="flex gap-4 w-[max-content] animate-scroll-right">
          {renderTags(row2)}
        </div>
      </div>
    </section>
  );
}
