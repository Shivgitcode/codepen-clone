import { Box } from "../../constants"
import { RiSettings5Fill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useAppContext } from "../../context/contextProvider";
import { ChangeEvent, FormEvent } from "react";

type ElementProp = {
    el: Box
}

export default function PenCard({ el }: ElementProp) {
    const { data, setData } = useAppContext()

    function handleForm(e: FormEvent<HTMLFormElement> | ChangeEvent<HTMLInputElement>) {
        setData(prev => {
            if ('target' in e && 'name' in e.target && 'value' in e.target) {
                return { ...prev, [e.target.name]: e.target.value }

            }
            return prev
        })

        console.log(data)


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
                <textarea name={el.name.toLowerCase()} cols={30} rows={13} className="w-full outline-none bg-[#1d1e22] resize-none" onChange={handleForm}></textarea>


            </div>

        </div>
    )
}
