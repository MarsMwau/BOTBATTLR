import React from 'react';

function BotCollection({ botData, enlistBot }) {
  return (
    <div>
      <h2>Bot Collection</h2>
      <div className="bot-army-container">
      {botData.map(bot => (
        <div className='bot-card' key={bot.id}>
          <img src={bot.avatar_url} alt="Bot" />
          <h3>{bot.name}</h3>
          <h7>{bot.catchphrase}</h7>
          <div className="stats">
          <p><i className="fa fa-heartbeat" aria-hidden="true"></i>{bot.health } </p>
          <p><i className="fa fa-bolt" aria-hidden="true"></i>{bot.damage } </p>
          <p><i className="fa fa-shield" aria-hidden="true"></i>{bot.armor }</p>
          </div>
          <button onClick={() => enlistBot(bot)}>Enlist</button>
        </div>
      ))}
      </div>
    </div>
  );
}

export default BotCollection;