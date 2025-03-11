import { useEffect, useState } from "react"
import "~/styles/global.css";
import LoginButton from "~popup/components/loginButton";

import PopupBox from "~popup/components/popupUI"

function IndexPopup() {
  const [data, setData] = useState("")

  const [token, setToken] = useState('')
  useEffect(() => {
    (async() => {
      const jwt_token = "abc"
      setToken(jwt_token)
    })()
  })
  return (
    token ? <PopupBox /> : <LoginButton/>
  );

  // return (
  //   <div className="bg-blue-500 text-sm text-white p-4 w-96">
  //     <h1>Popup</h1>
  //     <PopupBox />
  //     <div>
  //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium iure repellat, ea in, explicabo doloribus exercitationem enim, porro libero iusto asperiores ut! Nostrum, ipsa.
  //     </div>
  //   </div>
  // )
}

export default IndexPopup
