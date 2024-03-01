import { boxes } from "../../constants"
import PenCard from "./PenCard"


export default function Pen() {
    return (
        <div className="flex justify-between items-center bg-black px-[17px]">
            {
                boxes.map(el => {
                    return <PenCard key={el.id} el={el}></PenCard>
                })
            }
        </div>
    )
}
