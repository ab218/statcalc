import React from 'react';
import './App.css';

export default function Warrior({ vita, mana, desiredVita, desiredMana, withAc, withSleep }) {
	return (
		<div className="class">
			<table>
				<tbody>
					<tr>
						<td />
						<td>
							<h5>Warrior</h5>
						</td>
					</tr>
					<tr>
						<th>Spell</th>
						<th>Current</th>
						<th>Desired</th>
					</tr>
					<tr className="first-spell">
						<td>Berserk</td>
						<td>{Math.floor(withSleep() * (withAc * (vita * 0.85))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredVita * 0.85))).toLocaleString()}</td>
					</tr>
					<tr className="second-spell">
						<td>WW</td>
						<td>{Math.floor(withSleep() * (withAc * (vita * 1.575))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredVita * 1.575))).toLocaleString()}</td>
					</tr>
					<tr className="second-spell">
						<td>WW (kwi/orb)</td>
						<td>{Math.floor(withSleep() * (withAc * (vita * 1.75))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredVita * 1.75))).toLocaleString()}</td>
					</tr>
					<tr className="third-spell">
						<td>Assault</td>
						<td>{Math.floor(withSleep() * (withAc * (vita * 0.5))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredVita * 0.5))).toLocaleString()}</td>
					</tr>
					<tr className="forth-spell">
						<td>Sam</td>
						<td>{Math.floor(withSleep() * (withAc * (vita * 1.875 + mana * 0.5))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredVita * 1.875 + desiredMana * 0.5))).toLocaleString()}</td>
					</tr>
					<tr className="fifth-spell">
						<td>Sa</td>
						<td>{Math.floor(withSleep() * (withAc * (vita * 0.4875 + mana * 0.1))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredVita * 0.4875 + desiredMana * 0.1))).toLocaleString()}</td>
					</tr>
					<tr className="sixth-spell">
						<td>Rend</td>
						<td>{Math.floor(withSleep() * (withAc * (vita * 2 + mana * 2))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredVita * 2 + desiredMana * 2))).toLocaleString()}</td>
					</tr>
					<tr className="sixth-spell">
						<td>Townie</td>
						<td>{Math.floor(withSleep() * (withAc * (vita * 3))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredVita * 3))).toLocaleString()}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
