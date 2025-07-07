import { IoMenu } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { FaSquare } from "react-icons/fa";

function App() {

  return (
    <>
      <header class="flex justify-between pt-5 md:pl-[65px] md:pr-[65px] lg:pl-[95px] lg:pr-[95px] xl:pr-[120px] xl:pl-[120px] pl-5 pr-5 h-fit w-screen fixed">
        <img src="logojr.png" class="h-[40px]"/>
        <IoMenu class="text-[35px] text-[#3148D2]"/>
      </header>

      <main class="h-screen flex flex-col items-center  md:flex-row md:justify-center md:gap-[50px] lg:gap-[170px] xl:gap-[330px]">
        <div>
          <p class="pt-[85px] text-[#3148D2] font-[550] leading-none md:leading-[45px] lg:leading-[60px] xl:leading-[80px] text-[35px] text-center mb-5 md:text-left lg:text-[45px] xl:text-[60px] ">Descomplique seus <br/>Direitos de Consumidor.</p>
          <p class="text-[#2B2B2B] leading-tight font-[450] text-[20px] mt-[30px] text-center md:text-left lg:text-[30px] xl:text-[35px]">Ajudo você a entender e garantir que <br/>seus direitos sejam respeitados.</p>

          <button class=" w-[313px] text-[22px] h-[70px] bg-[#3148D2] font-[450] flex justify-center items-center text-white gap-2 rounded-[15px] mt-[40px] cursor-pointer hidden md:flex">
            Falar no Whatsapp <FaArrowRight class="flex justify-center items-center"/>
          </button>
          <p class="flex items-center text-[#2B2B2B] text-[14px] mt-[30px] hidden ml-2 md:flex"><FaSquare class="text-[7px] text-[#3148D2] mr-2"/>Atendimento 24 horas</p>
          <p class="flex items-center text-[#2B2B2B] text-[14px] hidden md:flex ml-2"><FaSquare class="text-[7px] text-[#d23131] mr-2"/>Em caso de urgência ligue, clique aqui.</p>
        </div>
        
        <div class="h-fit relative">
          <div class="bg-[#3148D2] w-[313px] lg:w-[440px] h-[317px] lg:h-[220px] md:h-[117px] relative rounded-[30px] flex justify-center mt-[160px] absolute md:bottom-[-110px] xl:bottom-[-150px]">
            <img src="jr.png" class="w-[300px] absolute bottom-0 lg:w-[350px] xl:w-[400px]"/>
          </div>
          <button class="md:hidden w-[313px] text-[22px] h-[70px] bg-[#3148D2] font-[450] flex justify-center items-center text-white gap-2 rounded-[15px] mt-[30px] cursor-pointer">
          Falar no Whatsapp <FaArrowRight class="flex justify-center items-center"/>
        </button>
          <p class="md:hidden flex items-center text-[#2B2B2B] text-[14px] mt-4"><FaSquare class="text-[7px] text-[#3148D2] mr-2"/>Atendimento 24 horas</p>
          <p class="md:hidden flex items-center text-[#2B2B2B] text-[14px]"><FaSquare class="text-[7px] text-[#d23131] mr-2"/>Em caso de urgência ligue, clique aqui.</p>
        </div>

      </main>
    </>
  )
}

export default App
