import React, { useContext, useState, useEffect } from "react";
import { globalProvider } from "./context/Context";
import Card from "./Card";
import styles from "../styles/Layout.module.css";

const Layout = () => {
	const { currentData, dataFromSearch, productCategory } =
		useContext(globalProvider);
	const [searchData, setSearchData] = dataFromSearch
	const [categoryData, setCategoryData] = productCategory
	const [data, setData] = currentData

	return (
		<div className={styles.container}>
			{
				categoryData.length > 0 ? categoryData.map((product, index) => {
					return <Card key={index} product={product} />;
				})
					: searchData.length > 0 ? searchData.map((product, index) => {
						return <Card key={index} product={product} />;
					})
						: data.map((product, index) => {
							return <Card key={index} product={product} />;
						})
			}
		</div>
	);
};

export default Layout;
