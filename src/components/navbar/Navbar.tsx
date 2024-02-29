import { logo, save, settings, view } from "../../assets"
import { FaPencilAlt } from "react-icons/fa";

export default function Navbar() {
    return (
        <div className="w-full bg-black">
            <div className="flex w-[95%] justify-between items-center text-white">
                <div>
                    <img src={logo} alt="" />
                    <div>
                        <div>Untitled <FaPencilAlt></FaPencilAlt></div>
                        <p>Captain Anonymous</p>
                    </div>
                </div>


                <div className="flex justify-between items-center">
                    <div className="flex items-center justify-center">
                        <img src={save} alt="" />
                        <span>Save</span>
                    </div>

                    <div className="flex items-center justify-center">
                        <img src={settings} alt="" />
                        <span>Settings</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={view} alt="" />
                    </div>

                    <button className="flex items-center justify-center">
                        Sign Up
                    </button>

                    <button className="flex items-center justify-center">
                        Log In
                    </button>

                </div>



            </div>

        </div>
    )

}