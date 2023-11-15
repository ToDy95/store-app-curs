import React from 'react'
import styles from '../styles/Card.module.css'
import { useNavigate } from 'react-router-dom'

const Card = ({ product }) => {
  const navigate = useNavigate()
  return (
    <div onClick= {()=> navigate(`/product/${product.id}`)} className={styles.card}>
      <img src={product.images[0]} alt="Denim Jeans" />
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p><button>Add to Cart</button></p>
    </div>
  )
}

export default Card
