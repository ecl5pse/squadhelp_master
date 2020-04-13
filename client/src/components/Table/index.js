import React     from 'react';
import style from './Table.module.scss'



const Table = () => {

  return (
    <table>
      <tr>
        <th>id</th>
        <th>Заработаные</th>
        <th>Потрачиные</th>
        <th>Сумма</th>
      </tr>
      <tr>
      <td>1</td>
      <td>+350$</td>
      <td>0</td>
      <td>0</td>
      </tr>
      <tr>
        <td>2</td>
        <td>0</td>
        <td>-350$</td>
        <td>0</td>
      </tr>
    </table>
  )
}

export default Table