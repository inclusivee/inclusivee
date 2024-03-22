import React from 'react';

export const handleButtonClick = (cookieValue: string) => {
    // Definir o valor do cookie
    const name = 'typeUser';
    const value = cookieValue;
    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // Converte a data para string
  
    // Criar o cookie usando o método `document.cookie`
    document.cookie = `${name}=${value}; expires=${expires}`;
  };

  export const handleUserId= (cookieValue: string) => {
    // Definir o valor do cookie
    const name = 'userId';
    const value = cookieValue;
    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // Converte a data para string
  
    // Criar o cookie usando o método `document.cookie`
    document.cookie = `${name}=${value}; expires=${expires}`;
  };

