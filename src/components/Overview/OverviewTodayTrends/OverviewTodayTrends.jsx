import './overview-today-trends.scss';
import TodayImg from '../../../assets/images/todays-img.png';

const OverviewTodayTrands = () => {
  return (
    <div className='overview__trends__today today'>
      <div className='today__content'>
        <div>
          <h2 className='today__title'>Today's trends</h2>
          <time dateTime='2019-05-25T09:41'>as of 25 May 2019, 09:41 PM</time>
        </div>
        <div>
          <p className='today__rating'>
            <span className='today__rating-active'></span>
            Today
          </p>
          <p className='today__rating'>
            <span className='today__rating-not-active'></span>
            Yesterday
          </p>
        </div>
      </div>
      <img
        src={TodayImg}
        alt='Rating img'
      />
    </div>
  );
};

export default OverviewTodayTrands;
