import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";

function AllEventsPage() {
  const events = getAllEvents();

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

export default AllEventsPage;
