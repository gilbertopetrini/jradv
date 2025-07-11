import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Atendimento() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");

  useEffect(() => {
    const nomeSalvo = localStorage.getItem("nome");
    if (nomeSalvo) {
      setNome(nomeSalvo);
    }
  }, []);

  return (
    <div class="bg-white h-fit flex flex-col justify-center items-center py-[30px]">
      <p class="w-[90%] text-black font-bold text-[20px] text-center mb-[30px]">Olá {nome}, Clique no assunto para o qual deseja atendimento:</p>
      <a class="w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#3148D2] text-[19px] flex flex-row items-center justify-center font-medium text-white rounded-3xl cursor-pointer shadow-sm">
        Fui vítima de um golpe do PIX
      </a>
      <a class="p-4 w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#3148D2] text-[19px] flex flex-row text-center items-center justify-center font-medium text-white rounded-3xl cursor-pointer mt-[30px] shadow-sm">
        Tive uma Negativação Indevida no SPC ou SERASA
      </a>
      <a class="p-4 w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#3148D2] text-[19px] flex flex-row text-center items-center justify-center font-medium text-white rounded-3xl cursor-pointer mt-[30px] shadow-sm">
        Seguro de Vida e Automóvel Negado
      </a>
      <a class="p-4 w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#3148D2] text-[19px] flex flex-row text-center items-center justify-center font-medium text-white rounded-3xl cursor-pointer mt-[30px] shadow-sm">
        Fui vítima de uma Fraude Bancária
      </a>
      <a class="p-4 w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#3148D2] text-[19px] flex flex-row text-center items-center justify-center font-medium text-white rounded-3xl cursor-pointer mt-[30px] shadow-sm">
        Meu Instagram foi Desativado ou Hackeado
      </a>
      <a class="p-4 w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#3148D2] text-[19px] flex flex-row text-center items-center justify-center font-medium text-white rounded-3xl cursor-pointer mt-[30px] shadow-sm">
        Fui vítima de Falsa Portabilidade de Empréstimo
      </a>
      <a class="p-4 w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#3148D2] text-[19px] flex flex-row text-center items-center justify-center font-medium text-white rounded-3xl cursor-pointer mt-[30px] shadow-sm">
        Tenho um Produto com Defeito
      </a>
      <a class="p-4 w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#3148D2] text-[19px] flex flex-row text-center items-center justify-center font-medium text-white rounded-3xl cursor-pointer mt-[30px] shadow-sm">
        Tenho um Seguro Não Contratado
      </a>
      <a class="p-4 w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#3148D2] text-[19px] flex flex-row text-center items-center justify-center font-medium text-white rounded-3xl cursor-pointer mt-[30px] shadow-sm">
        Outro assunto
      </a>
    </div>
  );
}

export default Atendimento;
