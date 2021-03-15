//import { getFeaturedEvents, getFilteredEvents } from '../dummy-data';
import Head from "next/head";

import { getFeaturedEvents } from "../helpers/apiUtils";
import EventList from "../components/events/EventList";

function EventsHomePage({ featuredEvents }) {
  //const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Head>
        <title>Next Events</title>
        <meta name="description" content="Great Events to attend" />
      </Head>
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
