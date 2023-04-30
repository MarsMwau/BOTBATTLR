import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

function App() {
  const [botData, setBotData] = useState([]);
  const [selectedBots, setSelectedBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then(response => response.json())
      .then(data => setBotData(data))
      .catch(error => console.error(error));
  }, []);

  const enlistBot = (bot) => {
    setSelectedBots(prevSelectedBots => {
      if (!prevSelectedBots.includes(bot)) {
        return [...prevSelectedBots, bot];
      }
      return prevSelectedBots;
    });
  };

  const dischargeBot = (bot) => {
    setSelectedBots(prevSelectedBots => prevSelectedBots.filter(selectedBot => selectedBot.id !== bot.id));
  };

  const deleteBot = (bot) => {
    const updatedBotData = botData.filter(existingBot => existingBot.id !== bot.id);
    setBotData(updatedBotData);
    setSelectedBots(prevSelectedBots => prevSelectedBots.filter(selectedBot => selectedBot.id !== bot.id));
  };

  return (
    <div className="App">
      <h1>Bots R Us</h1>
      <YourBotArmy selectedBots={selectedBots} dischargeBot={dischargeBot} deleteBot={deleteBot} />
      <BotCollection botData={botData} enlistBot={enlistBot} />
    </div>
  );
}
export default App;