import { useState } from "react"
import "./styles/global.css";

function IndexNewtab() {
  const [data, setData] = useState("")

  return (
    <div
      className="bg-black text-white w-full h-screen"
      >
      <h1>
        Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
      </h1>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <footer>Crafted by @PlasmoHQ</footer>
    </div>
  )
}

export default IndexNewtab
