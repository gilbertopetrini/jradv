import { IoMenu } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { FaSquare } from "react-icons/fa";

function App() {

  return (
    <>
      <header class="flex justify-between pt-5 pl-5 pr-5 h-fit w-screen fixed">
        <img src="logojr.png" class="w-30 "/>
        <IoMenu class="text-[35px] text-[#3148D2]"/>
      </header>
      <main class="h-screen flex flex-col items-center">
        <p class="pt-25 text-[#3148D2] font-[550] leading-none text-[35px] text-center mb-5">Descomplique seus <br/>Direitos de Consumidor.</p>
        <p class="text-[#2B2B2B] leading-tight text-[20px] text-center">Especialista em Direito do Consumidor,<br/>te ajudo a entender cada passo.</p>

        <div class="h-fit">
          <div class="bg-[#3148D2] w-[313px] h-[317px] relative rounded-[30px] flex justify-center mt-[160px]">
            <img src="jr.png" class="w-[300px] absolute bottom-0"/>
          </div>
          <button class="w-[313px] text-[22px] h-[70px] bg-[#3148D2] font-[450] flex justify-center items-center text-white gap-2 rounded-[15px] mt-[30px] cursor-pointer">
            Falar no Whatsapp <FaArrowRight class="flex justify-center items-center"/>
          </button>
          <p class="flex items-center text-[#2B2B2B] text-[14px] mt-4"><FaSquare class="text-[7px] text-[#3148D2] mr-2"/>Atendimento 24 horas</p>
          <p class="flex items-center text-[#2B2B2B] text-[14px]"><FaSquare class="text-[7px] text-[#3148D2] mr-2"/>Em caso de urgência ligue, clique aqui.</p>
        </div>

      </main>
    </>
  )
}

export default App
