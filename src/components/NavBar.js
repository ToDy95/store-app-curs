import React, {useContext, useState, useEffect} from 'react'
import { globalProvider } from './context/Context'
import styles from '../styles/NavBar.module.css'


const NavBar = () => {
  const {currentData, inputSearch, searchedData} = useContext(globalProvider)
  const [input, setInput] = inputSearch
  const [data, setData] = currentData
  const [dataSearch, setDataSearch] = searchedData
  const handlerKeyPress = (event) => {
    if (event.key === 'Enter') {
      setDataSearch(`/search?q=${input}`)
    }
  }
  const handlerClick = () => {
    setDataSearch(`/search?q=${input}`)
  }
  return (
    <div className={styles.NavBar}>
      {data.map((product, index) => {
        if (index%5 === 0) {
        return(
          <div key={index}>
            {product.category.toUpperCase()}
          </div>
        )}
      })}
      <div>
        <input type='search' value = {input} onChange = {e => setInput(e.target.value)} onKeyDown={handlerKeyPress}/>
        <button onClick={handlerClick}>Search</button>
      </div>
    </div>
  )
}

export default NavBar