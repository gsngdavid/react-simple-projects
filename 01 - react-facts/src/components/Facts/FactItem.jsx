function FactItem(props) {
    return <li className="flex items-center gap-3 font-Inter-Regular text-white">
        <span className="block w-2 h-2 rounded-full bg-[#61DAFB]"></span>
        <span>{props.fact}</span>
    </li>
}

export default FactItem;