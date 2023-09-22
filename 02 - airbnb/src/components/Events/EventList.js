import EventItem from "./EventItem";
import events from '../../data/events';

function EventList() {
    return <div className="space-x flex gap-4 flex-nowrap overflow-x-scroll pb-4 custom-scroll">
        {events.map(event => <EventItem key={event.id} event={event} />)}
    </div>
}

export default EventList;