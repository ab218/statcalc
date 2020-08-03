import React from 'react';
import './App.css';

export default function Mage({ vita, mana, desiredVita, desiredMana, withAc, withSleep }) {
	return (
		<div className="class">
			<table>
				<tbody className="spells">
					<tr>
						<td />
						<td>
							<h5>Mage</h5>
						</td>
					</tr>
					<tr>
						<th>Spell</th>
						<th>Current</th>
						<th>Desired</th>
					</tr>
					<tr className="first-spell">
						<td>HF</td>
						<td>{Math.floor(withSleep() * (withAc * (mana * 1.8))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredMana * 1.8))).toLocaleString()}</td>
					</tr>
					<tr className="second-spell">
						<td>Inferno</td>
						<td>{Math.floor(withSleep() * (withAc * (mana * 1.5))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredMana * 1.5))).toLocaleString()}</td>
					</tr>
					<tr className="third-spell">
						<td>Sam</td>
						<td>{Math.floor(withSleep() * (withAc * (mana * 2.5))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredMana * 2.5))).toLocaleString()}</td>
					</tr>
					<tr className="forth-spell">
						<td>Sa</td>
						<td>{Math.floor(withSleep() * (withAc * (vita * 0.5 + mana * 2))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredVita * 0.5 + desiredMana * 2))).toLocaleString()}</td>
					</tr>
					<tr className="fifth-spell">
						<td>Za</td>
						<td>{Math.floor(withSleep() * (withAc * (vita * 0.35 + mana * 1.7))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredVita * 0.3 + desiredMana * 1.8))).toLocaleString()}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
