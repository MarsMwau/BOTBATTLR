import React, { useState } from 'react';
import SortBar from './SortBar';

function BotCollection({ botData, enlistBot }) {
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleCardClick = (clickedBot) => {
    enlistBot(clickedBot);
  };

  const filteredBots = botData.filter((bot) =>
    bot.bot_class.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedBots = filteredBots.slice().sort((bot1, bot2) => {
    if (sortBy === "health") {
      return bot2.health - bot1.health;
    } else if (sortBy === "damage") {
      return bot2.damage - bot1.damage;
    } else if (sortBy === "armor") {
      return bot2.armor - bot1.armor;
    } else {
      return 0;
    }
  });

  return (
    <div>
      <h2>Bot Collection</h2>
      <SortBar filter={filter} setFilter={setFilter} setSortBy={setSortBy} />
      <div className="bot-collection-container">
        {sortedBots.map((bot) => (
          <div className='bot-card' key={bot.id} onClick={() => handleCardClick(bot)}>
            <img src={bot.avatar_url} alt="Bot" />
            <h3>{bot.name}</h3>
            <h7>{bot.catchphrase}</h7>
            <div className="stats">
              <p><i className="fa fa-heartbeat" aria-hidden="true"></i>{bot.health}</p>
              <p><i className="fa fa-bolt" aria-hidden="true"></i>{bot.damage}</p>
              <p><i className="fa fa-shield" aria-hidden="true"></i>{bot.armor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
