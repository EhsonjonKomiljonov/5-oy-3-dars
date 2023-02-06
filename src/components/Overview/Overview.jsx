const Overview = ({ children, children2, children3, children4 }) => {
  return (
    <div
      className='overview'
      style={{ backgroundColor: '#F7F8FC', paddingBottom: '30px' }}
    >
      <div className='container'>
        {children}
        {children2}
        {children3}
        {children4}
      </div>
    </div>
  );
};

export default Overview;
