import React, { useContext, useState, useEffect } from 'react'
import { globalProvider } from './context/Context'
import Card from './Card'
import styles from '../styles/Layout.module.css'


const Layout = () => {
  const { currentData } = useContext(globalProvider)
  const [data, setData] = currentData
  return (
    <div className={styles.container}>
      {data.map((product, index) => {
        return (
          <Card key={index} product={product} />
        )
      })}
    </div>
  )
}

export default Layout
