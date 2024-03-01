import { useAppContext } from "../../context/contextProvider"

export default function Display() {
    const { data } = useAppContext()
    // const displayDiv = document.querySelector('#display') as HTMLDivElement

    const displayBlock = `<body>${data.html}</body>`

    // displayDiv.innerHTML = displayBlock


    return (
        <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: displayBlock }}>


        </div>
    )
}
