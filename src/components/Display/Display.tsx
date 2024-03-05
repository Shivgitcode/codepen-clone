// import { html } from "@codemirror/lang-html"
import { useAppContext } from "../../context/contextProvider"
import CodepenDisplay from "./CodepenDisplay"

export default function Display() {
  const { data, loading } = useAppContext()
  // const displayDiv = document.querySelector('#display') as HTMLDivElement


  const displayBlock = `
      <html>
        <head>
          <style>${data.css}</style>
        <head/>
        <body>
          ${data.html}

          <script>${data.js}</script>
        <body/>
      </html>
      
    
    
    `

  console.log(loading)

  // displayDiv.innerHTML = displayBlock


  return (
    <div>
      {loading ? <div>Loading...</div> : <CodepenDisplay displayBlock={displayBlock}></CodepenDisplay>}
    </div>

  )
}
