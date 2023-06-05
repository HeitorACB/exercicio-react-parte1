// import { useState } from "react";

// const Formulario = () => {
//   const [peso, setPeso] = useState(0);
//   const [altura, setAltura] = useState(0);

//   const calcularIMC = () => {
//     const conta = peso / (altura * altura);
//     return conta;
//   }

//   return (
//     <form>
//       <input
//         type="number"
//         placeholder="Seu peso em kg"
//         onChange={(e) => setPeso(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Sua altura em metros"
//         step="0.01"
//         onChange={(e) => setAltura(e.target.value)}
//       />
//       <button type="button" onClick={calcularIMC}>
//         Calcular IMC
//       </button>
//       <p>Seu IMC é: {calcularIMC()}</p>
//     </form>
//   );
// };

// export default Formulario;

import { useState } from "react";
import styles from './form.module.css';

const Formulario = () => {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState(null);
  const [erro, setErro] = useState('');

  const calcularIMC = () => {
    if (peso <= 0 || altura <= 0) {
      setErro("Peso e altura devem ser valores positivos e não zero");
      return;
    } else {
      setErro("");
      const conta = peso / (altura * altura);
      setImc(conta);
    }
  }

  return (


    <form className={styles.form}>

      <h1>
        Calcule seu IMC
      </h1>

      <input
        type="number"
        placeholder="peso em kg ex:100"
        onChange={(e) => setPeso(e.target.value)}
      />
      <input
        type="number"
        placeholder="altura em metros ex:1,75"
        step="0.01"
        onChange={(e) => setAltura(e.target.value)}
      />
      <button type="button" onClick={calcularIMC}>
        Calcular IMC
      </button>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      {imc && <p>Seu IMC é: {imc}</p>}
    </form>
  );
};

export default Formulario;
