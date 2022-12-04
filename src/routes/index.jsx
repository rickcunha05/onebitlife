import { useState } from "react";

import AllPages from "./AllPages";
import Home from "../Pages/Home";

export default function Routes() {
    const [showHome, setShowHome] = useState('false')
    return <> {showHome === "true" ? <Home /> : <AllPages />} </>

}