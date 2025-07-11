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

  function CriaLink(resto) {
    const numero = "5521965811001";
    const mensagem = `Olá Dr. Junior, me chamo ${nome}${resto}`;
    const link = `https://wa.me/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`;
    window.open(link, "_blank"); // ou redirecionar com window.location.href = link
  }
  return (
    <div class="bg-white h-fit flex flex-col justify-center items-center py-[30px]">
      <p class="w-[90%] text-black font-bold text-[20px] text-center mb-[30px]">Olá {nome}, Clique no assunto para o qual deseja atendimento:</p>
      <a onClick={() => CriaLink(", fui vítima de um golpe do PIX e preciso de seu atendimento.")}
        class="p-4 w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#3148D2] text-[19px] flex flex-row text-center items-center justify-center font-medium text-white rounded-3xl cursor-pointer">
        Fui vítima de um golpe do PIX
      </a>
      <a onClick={() => CriaLink(", tive uma negativação indevida e preciso de seu atendimento.")} class="p-4 w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#3148D2] text-[19px] flex flex-row text-center items-center justify-center font-medium text-white rounded-3xl cursor-pointer mt-[30px]  ">
        Tive uma Negativação Indevida no SPC ou SERASA
      </a>
      <a onClick={() => CriaLink(", tive um seguro negado e preciso de seu atendimento.")} class="p-4 w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#3148D2] text-[19px] flex flex-row text-center items-center justify-center font-medium text-white rounded-3xl cursor-pointer mt-[30px]  ">
        Seguro de Vida e Automóvel Negado
      </a>
      <a onClick={() => CriaLink(", fui vítima de uma fraude bancária e preciso de seu atendimento.")} class="p-4 w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#3148D2] text-[19px] flex flex-row text-center items-center justify-center font-medium text-white rounded-3xl cursor-pointer mt-[30px]  ">
        Fui vítima de uma Fraude Bancária
      </a>
      <a onClick={() => CriaLink(", tive meu instagram hackeado/desativado e preciso de seu atendimento.")} class="p-4 w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#3148D2] text-[19px] flex flex-row text-center items-center justify-center font-medium text-white rounded-3xl cursor-pointer mt-[30px]  ">
        Meu Instagram foi Desativado ou Hackeado
      </a>
      <a onClick={() => CriaLink(", fui vítima de uma falsa portabilidade de empréstimo e preciso de seu atendimento.")} class="p-4 w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#3148D2] text-[19px] flex flex-row text-center items-center justify-center font-medium text-white rounded-3xl cursor-pointer mt-[30px]  ">
        Fui vítima de Falsa Portabilidade de Empréstimo
      </a>
      <a onClick={() => CriaLink(", comprei um produto e ele veio defeituoso, preciso de seu atendimento.")} class="p-4 w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#3148D2] text-[19px] flex flex-row text-center items-center justify-center font-medium text-white rounded-3xl cursor-pointer mt-[30px]  ">
        Tenho um Produto com Defeito
      </a>
      <a onClick={() => CriaLink(", fui vítima de um seguro não contratado e preciso de seu atendimento.")} class="p-4 w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#3148D2] text-[19px] flex flex-row text-center items-center justify-center font-medium text-white rounded-3xl cursor-pointer mt-[30px]  ">
        Tenho um Seguro Não Contratado
      </a>
      <a onClick={() => CriaLink("e preciso de seu atendimento.")} class="p-4 w-[90%] md:w-[690px] h-fit py-[20px]  bg-[#3148D2] text-[19px] flex flex-row text-center items-center justify-center font-medium text-white rounded-3xl cursor-pointer mt-[30px]  ">
        Outro assunto
      </a>
    </div>
  );
}

export default Atendimento;
