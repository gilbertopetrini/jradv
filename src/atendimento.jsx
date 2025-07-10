import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Atendimento() {
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [problema, setProblema] = useState('');
  const [produto, setProduto] = useState('');
  const [data, setData] = useState("");
  const [resultado, setResultado] = useState('');
  const [resolver, setResolver] = useState('');

  let mesS = data.substring(5,7)
  let diaS = data.substring(8,10)

  let dataformatada = diaS + "/" + mesS

  let date = new Date();

  let dia = String(date.getDate()).padStart(2, '0');
  let mes = String(date.getMonth() + 1).padStart(2, '0');
  let ano = date.getFullYear(); 

  let dataInput = `${ano}-${mes}-${dia}`; 

  let verificadorData
  let verificadorMes

  if(mesS < mes){
   verificadorData = false
  } else {
    verificadorData = true
  }

  if(diaS < dia){
    verificadorMes = false
  } else {
    verificadorMes = true
  }

  let isFormComplete = nome && empresa && problema && produto && resolver && data && resultado && verificadorData && verificadorMes;

 const mensagem = `Olá, Dr. Júnior Almeida. Preenchi o formulário no seu site e gostaria de ajuda com meu caso. Aqui estão as informações:

  *Meu nome:* ${nome}
  *Empresa envolvida:* ${empresa}
  *Tipo de problema:* ${problema}
  *Produto ou serviço:* ${produto}
  *Data do problema:* ${dataformatada}
  *Tentei resolver com a empresa?* ${resultado}
  *O que eu espero resolver com essa questão:* ${resolver}

  Aguardo seu retorno. Obrigado!`;

  const numero = '5521999475386'; // número com DDI e DDD
  const mensagemCodificada = encodeURIComponent(mensagem);
  const linkWhatsApp = `https://wa.me/${numero}?text=${mensagemCodificada}`;

    return (
      <div class="bg-[#3148D2] h-[1000px] flex flex-col justify-center items-center ">
        <div class="w-[80%] flex flex-row">
          <a onClick={() => navigate('/')} class="bg-[#ffffff] text-[14px] cursor-pointer text-black w-[30%] h-[40px] rounded-lg p-2 mb-7 flex flex-row items-center justify-center">< FaArrowLeft class="mr-2 text-[10px]"/>Voltar</a>
        </div>
        <div class="bg-white h-fit w-[80%] rounded-[25px] flex flex-col items-center pb-[50px]">
          
          <p class="font-bold text-[22px] mt-[25px] w-[80%]">Informações necessárias</p>
          <label class="w-[80%] mt-[15px] font-medium text-[14px] text-[#838385]">Seu nome <span class="text-[#d23131]">*</span></label>
          <input onChange={(e) => setNome(e.target.value)} class="bg-[#f3f3f3] w-[80%] h-[40px] rounded-lg p-5 mt-2"></input>
          <label class="w-[80%] mt-[15px] font-medium text-[14px] text-[#838385]">Nome da empresa envolvida <span class="text-[#d23131]">*</span></label>
          <input onChange={(e) => setEmpresa(e.target.value)} class="bg-[#f3f3f3] w-[80%] h-[40px] rounded-lg p-5 mt-2"></input>
          <label class="w-[80%] mt-[15px] font-medium text-[14px] text-[#838385]">Qual tipo de problema? <span class="text-[#d23131]">*</span></label>

          <select value={problema} onChange={(e) => setProblema(e.target.value)} class=" pl-5 border-none appearance-none bg-[#f3f3f3] w-[80%] h-[40px] rounded-lg mt-2 focus:outline-none focus:border-none">
            <option value="" selected disabled>Selecione um problema</option>
            <option value="Produto com defeito">Produto com defeito</option>
            <option value="Cobrança indevida">Cobrança indevida</option>
            <option value="Serviço não entregue">Serviço não entregue</option>
            <option value="Publicidade enganosa">Publicidade enganosa</option>
            <option value="Contrato não cumprido">Contrato não cumprido</option>
            <option value="Serviço Não Solicitado">Serviço Não Solicitado</option>
            <option value="Outro">Outro</option>
          </select>

          <label class="w-[80%] mt-[15px] font-medium text-[14px] text-[#838385]">Qual produto ou serviço em questão? <span class="text-[#d23131]">*</span></label>
          <input onChange={(e) => setProduto(e.target.value)} class="bg-[#f3f3f3] w-[80%] h-[40px] rounded-lg p-5 mt-2"></input>
          <label class="w-[80%] mt-[15px] font-medium text-[14px] text-[#838385]">Quando o problema aconteceu?<span class="text-[#d23131]">*</span></label>
          <input type="date" readonly id="date" name="date" min={dataInput} max="2025-12-31" onChange={(e) => setData(e.target.value)} className="bg-[#f3f3f3] w-[80%] h-[40px] rounded-lg p-5 mt-2 focus:outline-none focus:border-none"></input>
          <label class="w-[80%] mt-[15px] font-medium text-[14px] text-[#838385]">Você já tentou resolver diretamente com a empresa? Se sim, qual foi o resultado? <span class="text-[#d23131]">*</span></label>
          <input onChange={(e) => setResultado(e.target.value)}class="bg-[#f3f3f3] w-[80%] h-[40px] rounded-lg p-5 mt-2"></input>
          <label class="w-[80%] mt-[15px] font-medium text-[14px] text-[#838385]">O que você espera resolver com esta questão? <span class="text-[#d23131]">*</span></label>
          <select value={resolver} onChange={(e) => setResolver(e.target.value)} class=" pl-5 border-none appearance-none bg-[#f3f3f3] w-[80%] h-[40px] rounded-lg mt-2 focus:outline-none focus:border-none">
            <option value="" selected disabled>Selecione uma opção</option>
            <option value="Produto com defeito">Troca</option>
            <option value="Cobrança indevida">Devolução do dinheiro</option>
            <option value="Serviço não entregue">Cancelamento</option>
            <option value="Publicidade enganosa">Reparo</option>
            <option value="Contrato não cumprido">Indenização</option>
            <option value="Outro">Outro</option>
          </select>

          {isFormComplete ? (
                    <a class="bg-[#3148D2] text-white w-[80%] h-[40px] rounded-lg p-5 mt-7 flex flex-row items-center justify-center" href={linkWhatsApp}>Enviar <FaArrowRight class="ml-2 text-[12px]"/></a>
                ) : (
                    <a class="bg-[#575757] text-white w-[80%] h-[40px] rounded-lg p-5 mt-7 flex flex-row items-center justify-center">Enviar <FaArrowRight class="ml-2 text-[12px]"/></a>
                )}        
        </div>
        
      </div>
)}

export default Atendimento