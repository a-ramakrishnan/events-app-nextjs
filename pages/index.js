//import { getFeaturedEvents, getFilteredEvents } from '../dummy-data';
import { getFeaturedEvents } from "../helpers/apiUtils";
import EventList from "../components/events/EventList";

function EventsHomePage({ featuredEvents }) {
  //const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents: featuredEvents,
    },
    revalidate: 600,
  };
}

export default EventsHomePage;
