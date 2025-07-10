import { BrowserRouter, Routes, Route } from "react-router-dom"
import Atendimento from "./atendimento"
import Ldpage from "./ldpage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ldpage />} />
        <Route path="/Atendimento" element={<Atendimento />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App