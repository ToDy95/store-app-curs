import React, { createContext, useState, useEffect } from 'react'

export const globalProvider = createContext()
const Context = ({ children }) => {
  const [data, setData] = useState([])
  const [singleData, setSingleData] = useState(null)
  const [searchData, setSearchData] = useState([])
  const [input, setInput] = useState('')
  const [dataSearch, setDataSearch] = useState('')
  const [url, setUrl] = useState('https://dummyjson.com/products')
  const [searchUrl, setSearchUrl] = useState('https://dummyjson.com/products/search?q=')
  const [singleProductUrl, setSingleProductUrl] = useState('https://dummyjson.com/products/')
  const [singleProduct, setSingleProduct] = useState('')

  const getData = async (url) => {
    const response = await fetch(url)
    const result = await response.json()
    setData(result.products)
  }

  const getSingleData = async (url) => {
    const response = await fetch(url)
    const result = await response.json()
    setSingleData([result])
  }

  const getSearchData = async (url) => {
    const response = await fetch(url)
    const result = await response.json()
    setSearchData(result.products)
  }

  // Get product by id
  useEffect(() => {
    if (singleProduct)
      getSingleData(singleProductUrl + singleProduct)
  }, [singleProduct])
  //  Get product from search

  useEffect(() => {
    getSearchData(searchUrl + dataSearch)
  }, [dataSearch])

  //  Get all products
  useEffect(() => {
    getData(url)
  }, [url])

  return (
    <globalProvider.Provider value={{
      currentData: [data, setData],
      inputSearch: [input, setInput],
      searchedData: [dataSearch, setDataSearch],
      oneProduct: [singleProduct, setSingleProduct],
      oneProductData: [singleData, setSingleData]
    }}>
      {children}
    </globalProvider.Provider>
  )
}

export default Context
