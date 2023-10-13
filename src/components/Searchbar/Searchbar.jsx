
import React, {Component} from "react";
import styles from './Searchbar.module.css'

export class Searchbar extends Component{
    state={
        query:''
    }
render(){
    return ( 
    <header className={styles.searchbar}>
        <form  className={styles.form}>
          <button type="submit" className={styles.button}>
            <span className={styles.buttonLabel}>Search</span>
          </button>
          <input
            className={styles.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>)
}
   

}