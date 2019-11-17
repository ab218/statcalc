import React from 'react';
import './App.css';

export default function References({ references }) {
	const mapReferences = (references) => {
		return references.map((ref) => {
			const { caveName, min, max, ac } = ref.fields;
			return (
				<tr key={caveName}>
					<td>{caveName}</td>
					<td>{min}</td>
					<td>{max}</td>
					<td>{ac}</td>
				</tr>
			);
		});
	};
	return (
		<div className="caveStats">
			<table>
				<tbody>
					<tr>
						<th>Cave[Room]</th>
						<th>Min Vita</th>
						<th>Max Vita</th>
						<th>Base AC</th>
					</tr>
					{mapReferences(references)}
				</tbody>
			</table>
		</div>
	);
}
