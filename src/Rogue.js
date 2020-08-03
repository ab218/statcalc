import React from 'react';
import './App.css';

export default function Rogue({ vita, mana, desiredVita, desiredMana, withAc, withSleep }) {
	return (
		<div className="class">
			<table>
				<tbody>
					<tr>
						<td />
						<td>
							<h5>Rogue</h5>
						</td>
					</tr>
					<tr>
						<th>Spell</th>
						<th>Current</th>
						<th>Desired</th>
					</tr>
					<tr className="first-spell">
						<td>DA</td>
						<td>{Math.floor(withSleep() * (withAc * (vita * 1 + mana * 1))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredVita * 1 + desiredMana * 1))).toLocaleString()}</td>
					</tr>
					<tr className="second-spell">
						<td>LS</td>
						<td>{Math.floor(withSleep() * (withAc * (vita * 0.5 + mana * 2.5))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredVita * 0.5 + desiredMana * 2.5))).toLocaleString()}</td>
					</tr>
					<tr className="third-spell">
						<td>Sam</td>
						<td>{Math.floor(withSleep() * (withAc * (vita * 2))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredVita * 2))).toLocaleString()}</td>
					</tr>
					<tr className="forth-spell">
						<td>1st Sa</td>
						<td>{Math.floor(withSleep() * (withAc * (vita * 1.8 + mana * 0.45))).toLocaleString()}</td>
						<td>{Math.floor(withSleep() * (withAc * (desiredVita * 1.8 + desiredMana * 0.45))).toLocaleString()}</td>
					</tr>
					<tr className="forth-spell">
						<td>2nd Sa</td>
						<td>{Math.floor(withSleep() * (withAc * (vita * 0.83 * 1.8 + mana * 0.98 * 0.45))).toLocaleString()}</td>
						<td>
							{Math.floor(
								withSleep() * (withAc * (desiredVita * 0.83 * 1.8 + desiredMana * 0.98 * 0.45)),
							).toLocaleString()}
						</td>
					</tr>
					<tr className="forth-spell">
						<td>3rd Sa</td>
						<td>
							{Math.floor(
								withSleep() * (withAc * (vita * Math.pow(0.83, 2) * 1.8 + mana * Math.pow(0.98, 2) * 0.45)),
							).toLocaleString()}
						</td>
						<td>
							{Math.floor(
								withSleep() *
									(withAc * (desiredVita * Math.pow(0.83, 2) * 1.8 + desiredMana * Math.pow(0.98, 2) * 0.45)),
							).toLocaleString()}
						</td>
					</tr>
					<tr className="forth-spell">
						<td>4th Sa</td>
						<td>
							{Math.floor(
								withSleep() * (withAc * (vita * Math.pow(0.83, 3) * 1.8 + mana * Math.pow(0.98, 3) * 0.45)),
							).toLocaleString()}
						</td>
						<td>
							{Math.floor(
								withSleep() *
									(withAc * (desiredVita * Math.pow(0.83, 3) * 1.8 + desiredMana * Math.pow(0.98, 3) * 0.45)),
							).toLocaleString()}
						</td>
					</tr>
					<tr className="forth-spell">
						<td>5th Sa</td>
						<td>
							{Math.floor(
								withSleep() * (withAc * (vita * Math.pow(0.83, 4) * 1.8 + mana * Math.pow(0.98, 4) * 0.45)),
							).toLocaleString()}
						</td>
						<td>
							{Math.floor(
								withSleep() *
									(withAc * (desiredVita * Math.pow(0.83, 4) * 1.8 + desiredMana * Math.pow(0.98, 4) * 0.45)),
							).toLocaleString()}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
