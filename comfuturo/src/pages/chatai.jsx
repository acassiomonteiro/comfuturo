import React, { useState, useEffect } from 'react';
import Bg1 from '../img/Images_ Avatars.svg';
import Bg2 from '../img/button-submit.svg';
import Icon from '../img/icon-comfuturo.svg';
import { Footer } from '../components/Footer';

function Chatai() {
  const [messages, setMessages] = useState([
    {
      role: 'system',
      content: 'Oii, seja muito bem-vindo! Eu sou a IA da Comfuturo. 😊 Como posso lhe ajudar?',
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const userRole = 'user';
  const assistantRole = 'assistant';

  const sendMessage = (message, role) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { role, content: message },
    ]);
    setInputMessage('');
  };

  const fetchResponseFromAPI = async (message) => {
    setIsLoading(true);

    try {
      const API_URL = "https://api.openai.com/v1/chat/completions";
      const API_KEY = 'CHAVE DA API';

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: userRole, content: message }],
        }),
      };

      const response = await fetch(API_URL, requestOptions);
      const data = await response.json();
      const assistantResponse = data.choices[0].message.content;

      sendMessage(assistantResponse, assistantRole);
    } catch (error) {
      console.error('Erro ao enviar mensagem para a API:', error);
      sendMessage('Opa! Algo deu errado. Tente novamente.', assistantRole);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendClick = (e) => {
    e.preventDefault();
    if (inputMessage.trim() === '') return;
    sendMessage(inputMessage, userRole);
    fetchResponseFromAPI(inputMessage);
  };

  return (
    <div>
      <div className="bottom-0 right-0 mb-4 mr-4">
        <div className="flex justify-center py-14">
          <h1 className="text-4xl font-bold">
            Aprenda do <span className="text-violet-500">seu</span> jeito!
          </h1>
        </div>
      </div>

      <div className="flex justify-center pb-32">
        <div className="p-4 border-b bg-violet-500 text-white rounded-t-lg flex gap-1 items-center">
          <button className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400">
            <a href="/home">X</a>
          </button>
          <img src={Bg1} alt="foto de perfil" />
          <p className="text-lg font-semibold">Comfuturo</p>
        </div>
        <div className="bg-white rounded-lg max-w-5xl w-full">
          <div className="p-7 mb-80 h-auto overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${
                  message.role === userRole
                    ? 'mb-6 text-right'
                    : message.role === assistantRole
                    ? 'mb-6 text-left'
                    : ''
                }`}
              >
                {message.role === userRole ? (
                  <p className="bg-violet-500 text-white py-2 px-4 inline-block rounded-tl-2xl rounded-bl-2xl rounded-br-2xl">
                    {message.content}
                  </p>
                ) : (
                  <p className="bg-gray-100  text-gray-700 py-2 px-4 inline-block rounded-bl-2xl rounded-br-2xl rounded-tr-2xl">
                    {message.content}
                  </p>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="text-left text-gray-500 py-2">
                Carregando...
              </div>
            )}
          </div>
          <div className="relative p-4 border-t flex">
            <form onSubmit={handleSendClick} className="w-full">
              <input
                id=""
                type="text"
                placeholder="Digite sua mensagem..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="w-full px-4 py-3 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <button
                id="send-btn"
                type="submit"
                className="absolute right-0 text-white px-6 py-1.5 rounded-r-md"
              >
                <img src={Bg2} alt="" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Chatai;
