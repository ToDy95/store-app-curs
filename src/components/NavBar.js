import React, { useContext, useState, useEffect } from 'react'
import { globalProvider } from './context/Context'
import styles from '../styles/NavBar.module.css'
import { useNavigate } from 'react-router-dom'


const NavBar = () => {
  const { currentData, inputSearch, searchedData, dataFromSearch, oneProduct, appUser } = useContext(globalProvider)
  const [input, setInput] = inputSearch
  const [data, setData] = currentData
  const [dataSearch, setDataSearch] = searchedData
  const [searchData] = dataFromSearch
  const [singleProduct, setSingleProduct] = oneProduct
  const [user] = appUser
  const navigate = useNavigate()


  const handlerKeyPress = (event) => {
    // if (event.key === 'Enter') {
    setInput(event.target.value)
    setDataSearch(input)
    // }
  }
  const handlerClick = () => navigate("/search")
  const autocompleteHandler = (id) => {
    setSingleProduct(id)
    navigate(`/product/${id}`)
  }
  return (
    <div className={styles.NavBar}>
      {data.map((product, index) => {
        if (index % 5 === 0) {
          return (
            <div key={index}>
              {product.category.toUpperCase()}
            </div>
          )
        }
      })}
      <div className={styles.searchComponent}>
        <input type='search' value={input} onChange={e => handlerKeyPress(e)} />

        <div className={input.length > 0 ? `${styles.autocomplete}` : `${styles.hideElement}`}>
          <ul>
            {input.length > 0 ? searchData.map((item, index) => {
              return (
                <li onClick={() => autocompleteHandler(item.id)}
                  key={index}>{item.title}</li>
              )
            }
            ) : <></>}
          </ul>
        </div>

        <button onClick={handlerClick}>See all results</button>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        alignItems: 'center'
      }}
        onClick={() => navigate('/profile')}
      >
        <img src={user.image} alt={user.username} style={{
          borderRadius: 200,
          width: 20,
          height: 20
        }} />
        <div style={{
          display: 'flex',
          // flexDirection: 'flex',
          gap: 12,
          fontSize: 10
        }}><span>{user.firstName}</span> <span>{user.lastName}</span></div>
      </div>
    </div>
  )
}

export default NavBar
