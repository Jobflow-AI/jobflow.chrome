import { useState } from "react"
import "./styles/global.css"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      className="bg-red-300 text-white"
      style={{
        display: "flex",
        width: 300,
        flexDirection: "column",
        padding: 16
      }}>
      <h1>
        Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
      </h1>

    </div>
  )
}

export default IndexPopup
