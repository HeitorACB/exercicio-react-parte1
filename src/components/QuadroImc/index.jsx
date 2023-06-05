import { useState } from "react";
import styles from './Quadro.module.css';

import React from 'react';

const tabelaIMC = [
  { imc: 'Menos de 18,5', classificacao: 'Magreza' },
  { imc: '18,5 - 24,9', classificacao: 'Normal' },
  { imc: '25,0 - 29,9', classificacao: 'Sobrepeso' },
  { imc: '30,0 - 39,9', classificacao: 'Obesidade' },
  { imc: 'Mais de 40', classificacao: 'Obesidade grave' }
];

const TabelaIMC = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>IMC</th>
          <th>Classificações</th>
        </tr>
      </thead>
      <tbody>
        {tabelaIMC.map((item, index) => (
          <tr key={index}>
            <td>{item.imc}</td>
            <td>{item.classificacao}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabelaIMC;
