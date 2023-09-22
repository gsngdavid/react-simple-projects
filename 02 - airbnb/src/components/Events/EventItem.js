function EventItem(props) {
    const { event } = props;
    return (
        <div className="relative flex flex-col flex-shrink-0">
            <div className="relative flex-1">
                {event.status !== '' && <span className="absolute top-2 left-2 bg-white font-Poppins-Regular text-[10px] px-2 py-1 rounded-sm">{event.status}</span>}
                <img className="w-full h-full max-h-[15rem]" src={event.image} alt={event.description} />
            </div>
            <div className="mt-3 text-sm">
                <div className="flex gap-1 items-center font-Poppins-Light">
                    <img className="w-4 object-contain" src="./star.png" alt="Stat" />
                    <span className="text-[#222222]">{event.stars}</span>
                    <span className="text-[#918E9B]">({event.counts})</span>
                    <span className="text-[#918E9B]">·</span>
                    <span className="text-[#918E9B]">{event.country}</span>
                </div>
                <p className="font-Poppins-Light my-1">{event.description}</p>
                <p><span className="font-Poppins-SemiBold">From ${event.price}</span> / person</p>
            </div>
        </div>
    );
}


export default EventItem;