import React from "react";
import styles from '../styles/Grid.module.css'

const Grid = (props) => {
  console.log(props.arr.data)
  return (
    <div className={styles.grid}>
      {props.arr.data.map((s) => (
        <div id={`s${s.id}`}></div>
      ))}
    </div>
  );
}

export default Grid;
