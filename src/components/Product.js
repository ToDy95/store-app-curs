import React, { useContext, useState, useEffect } from 'react'
import { globalProvider } from './context/Context'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'
import Card from './Card'

const Product = () => {
  const { id } = useParams()
  const { oneProduct, oneProductData } = useContext(globalProvider)
  const [singleProduct, setSingleProduct] = oneProduct
  const [singleData, setSingleData] = oneProductData
  useEffect(() => { setSingleProduct(id) }, [id, singleData])
  return (
    <div>
      <NavBar />
      {singleData?.map((item, index) => {
        return (
          <Card product={item} key={index} />
        )
      })}
    </div>
  )
}

export default Product
