import React, { useContext, useState, useEffect } from "react";
import { globalProvider } from "./context/Context";
import Card from "./Card";
import styles from "../styles/Layout.module.css";

const Layout = () => {
	const { currentData, searchedData, dataFromSearch, productCategory } =
		useContext(globalProvider);
	const [categoryProduct, setCategoryProduct] = productCategory;
	const [data, setData] =
		searchedData.length > 0
			? dataFromSearch
			: productCategory.length > 0
			? productCategory
			: currentData;
	return (
		<div className={styles.container}>
			{data.map((product, index) => {
				return <Card key={index} product={product} />;
			})}
		</div>
	);
};

export default Layout;
