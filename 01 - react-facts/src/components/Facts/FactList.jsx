import { facts } from "../../data/facts";
import FactItem from "./FactItem";

function FactList() {
    return <ul className="flex flex-col gap-3 mt-8 pl-4">
        {facts.map((fact, i) => <FactItem key={i} fact={fact} />)}
    </ul>
}

export default FactList;