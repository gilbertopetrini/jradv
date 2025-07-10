import { IoMenu } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { FaSquare } from "react-icons/fa";
import { Container } from "postcss";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaPix } from "react-icons/fa6";
import { ToastContainer, toast, Slide } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



function Ldpage() {  
  const navigate = useNavigate();
  
  function copiarTexto() {
      const texto = "116.318.197-80";
      navigator.clipboard.writeText(texto)
      toast.info('Chave PIX copiada!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      notify();
    }
  return (
    <>

      <span class="xl:bottom-[50px] xl:left-1/2 xl:-translate-x-1/2 backdrop-blur border-white/40 border flex flex-col xl:flex-row h-[220px] w-[50px] xl:w-[220px] xl:h-[50px] bg-white/30 text-white text-[35px] justify-center items-center rounded-[20px] gap-4 fixed bottom-4 right-4 z-40 shadow-lg"><FaInstagram class="text-[#3148D2] cursor-pointer z-40 " onClick={() => window.open("https://www.instagram.com/junioralmeida.rio", "_blank")}/><FaWhatsapp onClick={() => window.open("https://api.whatsapp.com/send?phone=5521965811001", "_blank")} class="text-[#3148D2] cursor-pointer"/><FaTiktok class="text-[#3148D2] cursor-pointer" onClick={() => window.open("https://www.tiktok.com/@adv.junioralmeida", "_blank")}/><FaPix class="text-[#3148D2] cursor-pointer" id="cpf" onClick={copiarTexto} /></span>
      <ToastContainer />
      <header class="flex justify-between pt-5 md:pl-[65px] md:pr-[65px] lg:pl-[95px] lg:pr-[95px] xl:pr-[120px] xl:pl-[120px] pl-5 pr-5 h-fit w-screen fixed z-50">
        <img src="logojr.png" class="h-[40px]"/>
        <IoMenu class="text-[35px] text-[#3148D2]"/>
      </header>

      <main class="h-fit md:pt-[60px] lg:pt-0 flex flex-col items-center  md:flex-row md:justify-center md:gap-[50px] lg:gap-[170px] xl:h-[800px] xl:gap-[330px] xl:pt-[50px] xl:pb-[60px]">
        <div>
          <p class="pt-[110px] text-[#3148D2] font-[550] leading-none md:leading-[45px] lg:leading-[60px] xl:leading-[80px] text-[35px] text-center mb-5 md:text-left lg:text-[45px] xl:text-[60px] ">Descomplique seus <br/>Direitos de Consumidor.</p>
          <p class="text-[#2B2B2B] leading-tight font-[450] text-[20px] mt-[30px] text-center md:text-left lg:text-[30px] xl:text-[35px]">Ajudo você a entender e garantir que <br/>seus direitos sejam respeitados.</p>

          <a onClick={() => navigate('/atendimento ')} class=" w-[313px] text-[22px] h-[70px] bg-[#3148D2] font-[450] flex justify-center items-center text-white gap-2 rounded-[15px] mt-[40px] cursor-pointer hidden md:flex">
            Atendimento virtual <FaArrowRight class="flex justify-center items-center text-[19px]"/>
          </a>
          <p class="flex items-center text-[#2B2B2B] text-[14px] mt-[30px] hidden ml-2 md:flex"><FaSquare class="text-[7px] text-[#3148D2] mr-2 "/>Atendimento 24 horas</p>
          <p onClick={() => window.open("https://api.whatsapp.com/send?phone=5521965811001&text=%F0%9F%9A%A8%20URGENTE!%0A%0AOl%C3%A1%2C%20Dr.%20J%C3%BAnior%20Almeida.%20Estou%20passando%20por%20uma%20emerg%C3%AAncia%20jur%C3%ADdica%20e%20preciso%20de%20ajuda%20o%20mais%20r%C3%A1pido%20poss%C3%ADvel.%20%0A%0APoderia%20me%20atender%20com%20urg%C3%AAncia%2C%20por%20favor%3F")} class=" flex items-center text-[#2B2B2B] text-[14px] hidden md:flex ml-2"><FaSquare class="text-[7px] text-[#d23131] mr-2 "/>Em caso de urgência,<span class="text-[#d23131] ml-1 cursor-pointer">clique aqui.</span></p>
        </div>
        
        <div class="h-fit relative">
          <div class="bg-[#3148D2] w-[313px] lg:w-[440px] h-[317px] lg:h-[220px] md:h-[117px] relative rounded-[30px] flex justify-center mt-[160px] absolute md:bottom-[-110px] xl:bottom-[-150px]">
            <img src="jr.png" class="w-[300px] absolute bottom-0 lg:w-[350px] xl:w-[400px]"/>
          </div>
          <a class="md:hidden w-[313px] text-[22px] h-[70px] bg-[#3148D2] font-[450] flex justify-center items-center text-white gap-2 rounded-[15px] mt-[30px] cursor-pointer">
          Atendimento virtual <FaArrowRight class="flex justify-center items-center text-[19px]"/>
        </a>
          <p class="md:hidden flex items-center text-[#2B2B2B] text-[14px] mt-4"><FaSquare class="text-[7px] text-[#3148D2] mr-2"/>Atendimento 24 horas</p>
          <p onClick={() => window.open("https://api.whatsapp.com/send?phone=5521965811001&text=%F0%9F%9A%A8%20URGENTE!%0A%0AOl%C3%A1%2C%20Dr.%20J%C3%BAnior%20Almeida.%20Estou%20passando%20por%20uma%20emerg%C3%AAncia%20jur%C3%ADdica%20e%20preciso%20de%20ajuda%20o%20mais%20r%C3%A1pido%20poss%C3%ADvel.%20%0A%0APoderia%20me%20atender%20com%20urg%C3%AAncia%2C%20por%20favor%3F")} class="md:hidden flex items-center text-[#2B2B2B] text-[14px]"><FaSquare class="text-[7px] text-[#d23131] mr-2"/>Em caso de urgência ligue,<span class="text-[#d23131] ml-1 cursor-pointer">clique aqui.</span></p>
        </div>

      </main>

      <main class="h-fit py-[50px] bg-[#3148D2] mt-[50px] flex flex-col justify-center items-center gap-[40px] relative">
        <img src="wpp.jpg" alt="" class="absolute top-0 left-0 w-full h-full object-cover opacity-20 pointer-events-none" />
        <div class="w-[312px] md:w-[760px] lg:md:w-[1000px] h-[137px] bg-white  rounded-[15px] p-[15px] lg:p-[30px] flex flex-col justify-center z-10">
          <p class="text-[#3148D2] font-[550] text-[20px] md:text-[25px] lg:text-[27px] w-[220px] md:w-[500px] leading-[25px] ">Cobranças Abusivas? Eu Resolvo.</p>
          <p class="text-[#2B2B2B] text-[15px] md:text-[22px] lg:text-[24px] leading-[17px] md:leading-[26px] mt-[7px] lg:mt-[15px]" >Luto contra pagamentos indevidos em sua fatura e garantimos sua restituição em dobro.</p>  
        </div>

        <div class="w-[312px] md:w-[760px] lg:md:w-[1000px] h-[137px] bg-white  rounded-[15px] p-[15px] lg:p-[30px] flex flex-col justify-center z-10">
          <p class="text-[#3148D2] font-[550] text-[20px] md:text-[25px] lg:text-[27px] w-[220px] md:w-[500px] leading-[25px] ">Produto ou Serviço com Defeito?</p>
          <p class="text-[#2B2B2B] text-[15px] md:text-[22px] lg:text-[24px] leading-[17px] md:leading-[26px] mt-[7px] lg:mt-[15px]" >Garanto a troca, o conserto, a devolução do dinheiro ou a execução correta do que foi contratado.</p>  
        </div>

        <div class="w-[312px] md:w-[760px] lg:md:w-[1000px] h-[137px] bg-white  rounded-[15px] p-[15px] lg:p-[30px] flex flex-col justify-center z-10">
          <p class="text-[#3148D2] font-[550] text-[20px] md:text-[25px] lg:text-[27px] w-[220px] md:w-[500px] leading-[25px] ">Foi Enganado Pela Publicidade?</p>
          <p class="text-[#2B2B2B] text-[15px] md:text-[22px] lg:text-[24px] leading-[17px] md:leading-[26px] mt-[7px] lg:mt-[15px]" >Combato propagandas falsas e abusivas, assegurando seus direitos contra promessas não cumpridas.</p>  
        </div>

      </main>
      <footer class="bg-white h-[700px] md:h-[600px] flex flex-col items-center relative px-[25px] sm:px-[50px] xl:px-[90px] z-50">
        <p class="text-[#3148D2] font-[550] text-[30px] pt-[25px] lg:text-[40px]">Dr. Júnior Almeida</p>
        <p class="lg:text-[19px]">OAB/RJ n. 000.000</p>

        <div class="flex items-center flex-col-reverse md:flex-row">
          <div class="xl:w-[800px]">
          <p class="text-[16px] sm:text-[21px] lg:text-[24px] xl:text-[28px] pt-[20px] text-justify mr-[30px] xl:mr-[70px]">Sou o Júnior Almeida, me especializei em <span class="text-[#3148D2]">Advocacia Cível</span> e <span class="text-[#3148D2]">Trabalhista</span> pela Universidade Castelo Branco e atuo como Advogado do Consumidor.</p>
          <p class="text-[16px] sm:text-[21px] lg:text-[24px] xl:text-[28px] mt-[20px] text-justify hidden mr-[70px] xl:flex">Meu foco é garantir que os direitos dos consumidores sejam respeitados, com  excelência e comprometimento.</p>

          </div>
          <img src="jr2.png" class="h-[200px] w-[200px] mt-[20px] rounded-[15px] xl:h-[300px] xl:w-[300px] shadow-md" />
        </div>
        <p class="text-[16px] sm:text-[21px] lg:text-[24px] mt-[20px] text-justify xl:hidden ">Meu foco é garantir que os direitos dos consumidores sejam respeitados, com  excelência e comprometimento.</p>

        <a class=" w-[313px] text-[22px] h-[70px] bg-[#3148D2] font-[450] flex justify-center items-center text-white gap-2 rounded-[15px] mt-[40px] cursor-pointer">
            Atendimento virtual <FaArrowRight class="flex justify-center items-center text-[19px]"/>
          </a>
      </footer>
    </>
  )
}

export default Ldpage
