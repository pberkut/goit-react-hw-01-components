import PropTypes from 'prop-types';

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
          <StatItem label={label} percentage={percentage} />
        </li>
      ))}
    </ul>
  );
}

function StatItem({ label, percentage }) {
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
};

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
