import { logo, save, settings, view } from "../../assets"
import { FaPencilAlt } from "react-icons/fa";

export default function Navbar() {
    return (
        <div className="w-full bg-black border-b-[1px] border-[#2F2F2F]">
            <div className="flex w-[98%] justify-between items-center text-white mx-auto py-[10px]">
                <div className="flex items-center justify-center">
                    <img src={logo} alt="" className="max-w-[30px] mx-[8px] " />



                    <div>
                        <div className="flex items-center text-[19.5px] leading-[21.45px] font-semibold">Untitled <FaPencilAlt fontSize={"13px"} className="ml-[6px]"></FaPencilAlt></div>
                        <p className="text-[13.5px] leading-[20.25px] text-[#9b9dad] whitespace-nowrap">Captain Anonymous</p>
                    </div>
                </div>


                <div className="flex justify-between items-center">
                    <div className="flex items-center justify-center text-[15px] gap-[5px] leading-[18px] py-[16px] px-[16px] mr-[10px] my-[1px] bg-[#444857] rounded-[4px]">
                        <img src={save} alt="" className="w-[16px]" />
                        <span>Save</span>
                    </div>

                    <div className="flex items-center justify-center text-[15px] gap-[5px] leading-[18px] py-[16px] px-[16px] mr-[10px] my-[1px] bg-[#444857] rounded-[4px]">
                        <img src={settings} alt="" className="w-[16px]" />
                        <span>Settings</span>
                    </div>
                    <div className="flex items-center justify-center text-[15px] leading-[18px] py-[16px] px-[16px] mr-[10px] my-[1px] bg-[#444857] rounded-[4px]" >
                        <img src={view} alt="" className="w-[16px]" />
                    </div>

                    <button className="flex items-center justify-center text-[15px] leading-[18px] py-[16px] px-[16px] mr-[10px] my-[1px] bg-[#47cf73] text-[black] rounded-[4px] hover:bg-[#248c46] hover:text-[white]">
                        Sign Up
                    </button>

                    <button className="flex items-center justify-center text-[15px] leading-[18px] py-[16px] px-[16px]  my-[1px] bg-[#444857] rounded-[4px]">
                        Log In
                    </button>

                </div>



            </div>

        </div>
    )

}