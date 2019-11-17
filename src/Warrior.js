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
					<tr style={{ color: 'blue' }}>
						<td>Berserk</td>
						<td>{Math.floor(withSleep() * (withAc * (vita * 0.85))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredVita * 0.85))).toLocaleString()}</td>
					</tr>
					<tr style={{ color: 'green' }}>
						<td>WW</td>
						<td>{Math.floor(withSleep() * (withAc * (vita * 1.575))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredVita * 1.575))).toLocaleString()}</td>
					</tr>
					<tr style={{ color: 'green' }}>
						<td>WW (kwi/orb)</td>
						<td>{Math.floor(withSleep() * (withAc * (vita * 1.75))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredVita * 1.75))).toLocaleString()}</td>
					</tr>
					<tr style={{ color: 'red' }}>
						<td>Assault</td>
						<td>{Math.floor(withSleep() * (withAc * (vita * 0.5))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredVita * 0.5))).toLocaleString()}</td>
					</tr>
					<tr style={{ color: 'purple' }}>
						<td>Sam</td>
						<td>{Math.floor(withSleep() * (withAc * (vita * 1.875 + mana * 0.5))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredVita * 1.875 + desiredMana * 0.5))).toLocaleString()}</td>
					</tr>
					<tr style={{ color: 'orange' }}>
						<td>Sa</td>
						<td>{Math.floor(withSleep() * (withAc * (vita * 0.4875 + mana * 0.1))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredVita * 0.4875 + desiredMana * 0.1))).toLocaleString()}</td>
					</tr>
					<tr style={{ color: 'brown' }}>
						<td>Rend</td>
						<td>{Math.floor(withSleep() * (withAc * (vita * 2 + mana * 2))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredVita * 2 + desiredMana * 2))).toLocaleString()}</td>
					</tr>
					<tr style={{ color: 'brown' }}>
						<td>Townie</td>
						<td>{Math.floor(withSleep() * (withAc * (vita * 3))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredVita * 3))).toLocaleString()}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
