import { getFeaturedEvents, getFilteredEvents } from '../dummy-data';
import EventList from '../components/events/EventList';

function EventsHomePage() {
	const featuredEvents = getFeaturedEvents();

	return (
		<div>
			<EventList items={featuredEvents} />
		</div>
	);
}

export default EventsHomePage;
