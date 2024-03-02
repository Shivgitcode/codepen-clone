// import { html } from "@codemirror/lang-html"
import { useAppContext } from "../../context/contextProvider"
import Iframe from 'react-iframe'

export default function Display() {
  const { data } = useAppContext()
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

  // displayDiv.innerHTML = displayBlock


  return (
    <iframe srcDoc={displayBlock} title="Output" sandbox="allow-scripts" frameBorder={0} width="100%" height="100%;" >

    </iframe>
  )
}
