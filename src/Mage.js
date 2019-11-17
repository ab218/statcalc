import React from 'react';
import './App.css';

export default function Mage({ vita, mana, desiredVita, desiredMana, withAc, withSleep }) {
	return (
		<div className="class">
			<table>
				<tbody>
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
					<tr style={{ color: 'blue' }}>
						<td>HF</td>
						<td>{Math.floor(withSleep() * (withAc * (mana * 1.8))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredMana * 1.8))).toLocaleString()}</td>
					</tr>
					<tr style={{ color: 'green' }}>
						<td>Inferno</td>
						<td>{Math.floor(withSleep() * (withAc * (mana * 1.5))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredMana * 1.5))).toLocaleString()}</td>
					</tr>
					<tr style={{ color: 'red' }}>
						<td>Sam</td>
						<td>{Math.floor(withSleep() * (withAc * (mana * 2.5))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredMana * 2.5))).toLocaleString()}</td>
					</tr>
					<tr style={{ color: 'purple' }}>
						<td>Sa</td>
						<td>{Math.floor(withSleep() * (withAc * (vita * 0.5 + mana * 2))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredVita * 0.5 + desiredMana * 2))).toLocaleString()}</td>
					</tr>
					<tr style={{ color: 'orange' }}>
						<td>Za</td>
						<td>{Math.floor(withSleep() * (withAc * (vita * 0.3 + mana * 1.8))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredVita * 0.3 + desiredMana * 1.8))).toLocaleString()}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
