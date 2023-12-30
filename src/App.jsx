import { useState } from 'react'

function App() {
  const [color, setColor] = useState('white')
  const [navColor, setNavColor] = useState("#334155")

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg 
        px-3 py-2 rounded-3xl' style={{ backgroundColor: navColor}}>

          <button 
          onClick={() => {setColor("red") 
          setNavColor("white")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}>
            Red
          </button>

          <button 
          onClick={() => {setColor("green")
          setNavColor("white")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}}>
            Green
          </button>

          <button 
          onClick={() => {setColor("blue")
          setNavColor("white")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"blue"}}>
            Blue
          </button>

          <button 
          onClick={() => {setColor("black")
          setNavColor("white")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"black"}}>
            Black
          </button>

          <button 
          onClick={() => {setColor("olive")
          setNavColor("white")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:'olive'}}>
            Olive
          </button>

          <button 
          onClick={() => {setColor("gray")
          setNavColor("white")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"gray"}}>
            Gray
          </button>

          <button 
          onClick={() => {setColor("yellow")
          setNavColor("white")}}
          className="outline-none px-4 py-1 rounded-full shadow-lg"
          style={{backgroundColor:"yellow"}}>
            Yellow
          </button>

          <button 
          onClick={() => {setColor("pink")
          setNavColor("#334155")}}
          className="outline-none px-4 py-1 rounded-full shadow-lg"
          style={{backgroundColor:"pink"}}>
            Pink
          </button>

          <button 
          onClick={() => {setColor("purple")
          setNavColor("white")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"purple"}}>
            Purple
          </button>

          <button 
          onClick={() => {setColor("lavender")
          setNavColor("#334155")}}
          className="outline-none px-4 py-1 rounded-full shadow-lg"
          style={{backgroundColor:"#e6e6fa"}}>
            Lavender
          </button>

          <button 
          onClick={() => {setColor("white")
          setNavColor("#334155")}}
          className="outline-none px-4 py-1 rounded-full shadow-lg"
          style={{backgroundColor:"white"}}>
            White
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
