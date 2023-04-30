import React from 'react';

function YourBotArmy({ selectedBots, dischargeBot, deleteBot }) {
  const handleBotClick = (bot) => {
    dischargeBot(bot);
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="bot-army-container">
        {selectedBots.map(bot => (
          <div className='army-card' key={bot.id} onClick={() => handleBotClick(bot)}>
            <img src={bot.avatar_url} alt="Bot" />
            <h3>{bot.name}</h3>
            <h6>{bot.catchphrase}</h6>
            <div className="stats">
              <p><i className="fa fa-heartbeat" aria-hidden="true"></i>{bot.health}</p>
              <p><i className="fa fa-bolt" aria-hidden="true"></i>{bot.damage}</p>
              <p><i className="fa fa-shield" aria-hidden="true"></i>{bot.armor}</p>
            </div>
            <button onClick={() => deleteBot(bot)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
