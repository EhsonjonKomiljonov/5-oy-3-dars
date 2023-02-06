import DataOverviewRatings from '../../db/DataOverviewRatings';
import DataOverviewTicketsItem from '../../db/DataOverviewTicketsItem';
import DataOverviewCards from '../../db/DataOverviewCards';
import PageHeader from '../../components/PageHeader/PageHeader';
import Overview from '../../components/Overview/Overview';
import OverviewCard from '../../components/Overview/OverviewCard/OverviewCard';
import OverviewTrends from '../../components/Overview/OverviewTrends/OverviewTrends';
import OverviewTodayTrands from '../../components/Overview/OverviewTodayTrends/OverviewTodayTrends';
import OverviewTrandsRating from '../../components/Overview/OverviewTrendsRating/OverviewTrandsRating';
import OverviewRatingItem from '../../components/Overview/OverviewRatingItem/OverviewRatingItem';
import OverviewTickets from '../../components/Overview/OverviewTickets/OverviewTickets';
import OverviewTicketsItem from '../../components/Overview/OverviewTickets/OverviewTicketsItem/OverviewTicketsItem';

export const OverviewPage = () => {
  return (
    <Overview
      children2={DataOverviewCards.map((el) => (
        <OverviewCard
          title={el.title}
          number={el.number}
        />
      ))}
      children3={
        <OverviewTrends
          children1={<OverviewTodayTrands />}
          children2={
            <OverviewTrandsRating>
              {DataOverviewRatings.map((el) => (
                <OverviewRatingItem
                  text={el.text}
                  number={el.number}
                />
              ))}
            </OverviewTrandsRating>
          }
        />
      }
      children4={
        <OverviewTickets
          children={DataOverviewTicketsItem.map((el) => (
            <OverviewTicketsItem
              text={el.text}
              number={el.number}
            />
          ))}
        />
      }
    >
      <PageHeader pageName='Overview' />
    </Overview>
  );
};
