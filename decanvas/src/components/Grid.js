import React from "react";
import styles from '../styles/Grid.module.css'

const Grid = (props) => {
  return (
    <div className={styles.grid}>
      {props.arr.data.map((s) => (
        <div id={`s${s.key}`}></div>
      ))}
    </div>
  );
}

export default Grid;
