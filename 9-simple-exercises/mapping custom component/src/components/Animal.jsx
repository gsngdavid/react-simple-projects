function Animal({ animal }) {
    return <div className="flex items-center gap-4 border pr-4 py-2 pl-1">
        <img width={50} src={animal.image} />
        <span className="">{ animal.name }</span>
    </div>;
}

export default Animal;