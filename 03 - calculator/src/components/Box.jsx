function Box({ id, box }) {
    const colored = ++id % 4 === 0 || box.item === '=';
    const classes = `grid place-items-center py-6 border ${box.item === '0' && 'col-span-2'} ${colored && 'text-white'} bg-[${colored ? '#F48637' : '#DCDBDC'}]`;

    return <button className={classes}>
        <span>{box.item}</span>
        {/* <i className="bg-[#DCDBDC]"></i>
        <i className="bg-[#F48637]"></i> */}
    </button>
}

export default Box;

// #DCDBDC