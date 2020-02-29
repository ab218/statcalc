import React from 'react';
import './App.css';

export default function Stats({
	mana,
	vita,
	desiredMana,
	desiredVita,
	handleDesiredMana,
	handleDesiredVita,
	handleMana,
	handleVita,
}) {
	return (
		<div className="stats">
			<div className="vita">
				<h4>Current Vita</h4>
				<input className="vita-input" value={vita} onChange={handleVita} />
				<h4>Desired Vita</h4>
				<input className="vita-input" value={desiredVita} onChange={handleDesiredVita} />
			</div>
			<div className="mana">
				<h4>Current Mana</h4>
				<input className="mana-input" value={mana} onChange={handleMana} />
				<h4>Desired Mana</h4>
				<input className="mana-input" value={desiredMana} onChange={handleDesiredMana} />
			</div>
		</div>
	);
}
