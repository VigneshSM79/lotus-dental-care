export default function Stats() {
  const stats = [
    { n: <><b>10</b>+</>, l: "Dental specialities" },
    { n: <><b>5.0</b>★</>, l: "Average patient rating" },
    { n: <><b>6</b></>, l: "Days a week, two sessions" },
    { n: "Laser", l: "Painless modern treatment" },
  ];

  return (
    <section className="stats">
      <div className="wrap">
        <div className="grid">
          {stats.map((s, i) => (
            <div className="item" key={i}>
              <div className="n">{s.n}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
