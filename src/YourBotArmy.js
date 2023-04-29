import React from 'react';

function YourBotArmy({ selectedBots, dischargeBot, deleteBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="bot-army-container">
      {selectedBots.map(bot => (
        <div className='army-card' key={bot.id}>
          <img src={bot.avatar_url} alt="Bot" />
          <h3>{bot.name}</h3>
          <p><i className="fa fa-heartbeat" aria-hidden="true"></i>{bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <button onClick={() => dischargeBot(bot)}>Discharge</button>
          <button onClick={() => deleteBot(bot)}>Delete</button>
        </div>
      ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
