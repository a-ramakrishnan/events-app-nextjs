import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents } from "../../helpers/apiUtils";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";

function AllEventsPage({ allEvents }) {
  const events = allEvents;

  const router = useRouter();

  function findEventsHandler(year, month) {
    const path = `/events/${year}/${month}`;
    router.push(path);
  }

  if (!events) {
    return <p>No event found</p>;
  }
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const allEvents = await getAllEvents();
  return {
    props: {
      allEvents: allEvents,
    },
    revalidate: 600,
  };
}

export default AllEventsPage;
