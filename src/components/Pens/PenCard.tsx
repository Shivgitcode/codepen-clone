import { Box } from "../../constants"
import { RiSettings5Fill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useAppContext } from "../../context/contextProvider";
import Codemirror from "@uiw/react-codemirror"
import { html } from "@codemirror/lang-html"
import { material } from "@uiw/codemirror-theme-material";
import { less } from "@codemirror/lang-less"
import {
    javascript
} from "@codemirror/lang-javascript"

type ElementProp = {
    el: Box
}

export default function PenCard({ el }: ElementProp) {
    const { data, setData } = useAppContext()

    function handleForm(newValue: string) { // Updated to accept newValue
        try {
            setData((prev) => ({ ...prev, [el.name.toLowerCase()]: newValue }));
        } catch (error) {
            console.error("Error updating data:", error);
        }

        console.log(data);
    }



    return (
        <div className="flex flex-col w-full mr-[17px] mb-[17px]">
            <div className="flex items-center justify-between w-full">
                <div className="flex  justify-between  items-center bg-[#1d1e22] gap-[5px] px-[12px] py-[9px]">
                    <img src={el.image} alt="" className="w-4 h-4" />
                    <p className="text-[16.5px] leading-[16.5px] text-[#aaaebc] font-bold">
                        {el.name}

                    </p>
                </div>

                <div className="flex items-center ">
                    <button className="px-[7px] py-[2px] mr-[3px] rounded-[2px] bg-[#444857]"><RiSettings5Fill fill="white"></RiSettings5Fill></button>
                    <button className="px-[7px] py-[2px] rounded-[2px] bg-[#444857]"><MdKeyboardArrowDown fill="white"></MdKeyboardArrowDown></button>
                </div>
            </div>


            <div className="w-full">
                {/* <textarea name={el.name.toLowerCase()} cols={30} rows={13} className="w-full outline-none bg-[#1d1e22] resize-none" onChange={handleForm}></textarea> */}

                {
                    el.name === "HTML" && <Codemirror height="250px" extensions={[html()]} onChange={(value) => handleForm(value)} theme={material}></Codemirror>
                }

                {
                    el.name === "CSS" && <Codemirror height="250px" extensions={[less()]} onChange={(value) => handleForm(value)} theme={material}></Codemirror>
                }

                {
                    el.name === "JS" && <Codemirror height="250px" extensions={[javascript()]} onChange={(value) => handleForm(value)} theme={material}></Codemirror>
                }

            </div>

        </div>
    )
}
