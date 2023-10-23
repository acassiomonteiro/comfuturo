import React, { useState } from 'react';

const apiKey = 'sua_api_key';

export default function ChatAI() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = () => {
    if (!message) {
      // Tratar entrada vazia
      return;
    }

    setStatus('Carregando...');
    setIsLoading(true);

    fetch("https://api.openai.com/v1/completions", {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: message,
        max_tokens: 2048,
        temperature: 0.5
      })
    })
    .then((response) => response.json())
    .then((response) => {
      const r = response.choices[0]['text'];
      setStatus('');
      showHistory(message, r);
      setIsLoading(false);
      setMessage('');
    })
    .catch((e) => {
      console.log(`Error -> ${e}`);
      setStatus('Erro, tente novamente mais tarde...');
      setIsLoading(false);
    });
  }

  const showHistory = (message, response) => {
    setHistory(prevHistory => [
      ...prevHistory,
      { message, response }
    ]);

    // Levar scroll para o final
    const historyBox = document.getElementById('history');
    historyBox.scrollTop = historyBox.scrollHeight;
  }

  return (
    <div className="box-questions">
      <div className="header">
        <p>Perguntas e respostas - CHATGPT</p>
      </div>
      <p id="status">{status}</p>
      <div id="history">
        {history.map((item, index) => (
          <div key={index} className="box-my-message">
            <p className="my-message">{item.message}</p>
            <div className="box-response-message">
              <p className="response-message">{item.response}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="footer">
        <input
          type="text"
          id="message-input"
          placeholder="Pergunte aqui..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="btn-submit"
          id="btn-submit"
          onClick={sendMessage}
          disabled={isLoading}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
