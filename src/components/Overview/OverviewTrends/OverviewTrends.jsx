import './overview-trends.scss';

const OverviewTrends = ({ children1, children2 }) => {
  return (
    <div className='overview__trends'>
      {children1}
      {children2}
    </div>
  );
};

export default OverviewTrends;
