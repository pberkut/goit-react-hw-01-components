import PropTypes from 'prop-types';
import {
  StatisticsCard,
  Label,
  Percentage,
  StatItemCard,
  StatListCard,
  Tittle,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsCard>
      {title && <Tittle>{title.toUpperCase()}</Tittle>}

      <StatList stats={stats} />
    </StatisticsCard>
  );
};

function StatList({ stats }) {
  return (
    <StatListCard>
      {stats.map(({ id, label, percentage }, idx) => (
        <StatItemCard key={id} index={idx}>
          <StatItem label={label} percentage={percentage} />
        </StatItemCard>
      ))}
    </StatListCard>
  );
}

function StatItem({ label, percentage }) {
  return (
    <>
      <Label>{label}</Label>
      <Percentage>{percentage + '%'}</Percentage>
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
    }).isRequired
  ),
};
