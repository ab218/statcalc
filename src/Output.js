import React from 'react';
import './App.css';
import Mage from './Mage.js';
import Rogue from './Rogue.js';
import Warrior from './Warrior.js';

export default function Output({ vita, mana, desiredVita, desiredMana, ac, withSleep }) {
	function SpellRow({
		color,
		spellName,
		vita,
		mana,
		vitaMultiplyer,
		manaMultiplyer,
		desiredVita,
		desiredMana,
		withAc,
		withSleep,
	}) {
		return (
			<tr style={{ color: color }}>
				<td>{spellName}</td>
				<td>{Math.floor(withSleep() * (withAc * (vita * vitaMultiplyer + mana * manaMultiplyer))).toLocaleString()}</td>
				<td>
					{Math.floor(
						withSleep() * (withAc * (desiredVita * vitaMultiplyer + desiredMana * manaMultiplyer)),
					).toLocaleString()}
				</td>
			</tr>
		);
	}

	function determineAC(armor) {
		const ac = Number(armor);
		if (ac >= -95) {
			return 1 + ac / 100;
		} else {
			const adjAc = ac + 95;
			return (1 - 95 / 100) * (1 + adjAc / 100);
		}
	}
	return (
		<div className="output">
			<Rogue
				vita={vita}
				mana={mana}
				desiredVita={desiredVita}
				desiredMana={desiredMana}
				withAc={determineAC(ac)}
				withSleep={withSleep}
			/>
			<Warrior
				vita={vita}
				mana={mana}
				desiredVita={desiredVita}
				desiredMana={desiredMana}
				withAc={determineAC(ac)}
				withSleep={withSleep}
			/>
			<Mage
				vita={vita}
				mana={mana}
				desiredVita={desiredVita}
				desiredMana={desiredMana}
				withAc={determineAC(ac)}
				withSleep={withSleep}
			/>
		</div>
	);
}
