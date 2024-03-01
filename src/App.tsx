import Display from "./components/Display/Display"
import Pen from "./components/Pens/Pen"
import Navbar from "./components/navbar/Navbar"


function App() {
  return (
    <div className="w-screen h-screen box-border overflow-x-hidden m-0 p-0 font-lato">
      <Navbar></Navbar>
      <Pen></Pen>
      <Display></Display>
    </div>
  )
}

export default App
