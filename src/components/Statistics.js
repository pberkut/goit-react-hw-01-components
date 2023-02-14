const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <StatList stats={stats} />
    </section>
  );
};

function StatList({ stats }) {
  return (
    <ul>
      {stats.map(({ id, label, percentage }) => (
        <li className="item" key={id}>
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
      ))}
    </ul>
  );
}

export default Statistics;
