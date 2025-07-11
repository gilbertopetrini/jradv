import { BrowserRouter, Routes, Route } from "react-router-dom"
import Atendimento from "./atendimento"
import Ldpage from "./ldpage"
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Ldpage />} />
        <Route path="/atendimento" element={<Atendimento />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App