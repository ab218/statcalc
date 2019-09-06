import React from 'react';
import './App.css';

export default function References() {
  const styles = {
    increase: {fontWeight: 'bold', color: 'green'}
  }
  return (
    <div className="caveStats">
      <table>
        <tbody>
          <tr>
            <th>Cave[Room]</th>
            <th>Min Vita</th>
            <th>Max Vita</th>
            <th>AC</th>
          </tr>
          <tr>
            <td>Bird4[1]</td>
            <td>750k</td>
            <td>1.05m</td>
            <td>-75</td>
          </tr>
          <tr>
            <td>Bird4[2]</td>
            <td>850k</td>
            <td>1.05m</td>
            <td>-76</td>
          </tr>
          <tr>
            <td>Bird4[3]</td>
            <td>850k</td>
            <td>1.15m</td>
            <td>-76</td>
          </tr>
          <tr>
            <td>Bird4[4]</td>
            <td>800k</td>
            <td>1.1m</td>
            <td>-76</td>
          </tr>
          <tr>
            <td>Bird4[5]</td>
            <td>1.37m</td>
            <td>1.75m</td>
            <td>-76</td>
          </tr>
          <tr>
            <td>Bird4[6]</td>
            <td>1.4m</td>
            <td>1.8m</td>
            <td>-76</td>
          </tr>
          <tr>
            <td>Bird4[7]</td>
            <td>1.5m</td>
            <td>2m</td>
            <td>-76</td>
          </tr>
          <tr>
            <td>Bird4[8]</td>
            <td>1.8m</td>
            <td>2.25m</td>
            <td>-76</td>
          </tr>
          <tr>
            <td>Bird4[LR]</td>
            <td>1.7m</td>
            <td>2.15m</td>
            <td>-76</td>
          </tr>
          <tr>
            <td>Turtle4[LR]</td>
            <td>1.8m</td>
            <td>2.5m</td>
            <td>-76</td>
          </tr>
          <tr>
            <td>ATG 9</td>
            <td>2.2m</td>
            <td>2.85m</td>
            <td>-76</td>
          </tr>
          <tr>
            <td>ATG 10</td>
            <td>3.3m</td>
            <td>4.3m</td>
            <td>-76</td>
          </tr>
          <tr>
            <td>ATG 11</td>
            <td style={styles.increase}>5.2m</td>
            <td style={styles.increase}>6.5m</td>
            <td>-76</td>
            <td style={styles.increase}>+15% increase</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}