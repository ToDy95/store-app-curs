import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { globalProvider } from "./context/Context";
import Layout from "./Layout";

const Category = () => {
	const { name } = useParams();
	console.log(name);
	const { cName } = useContext(globalProvider);
	const [categoryName, setCategoryName] = cName;
	useEffect(() => {
		setCategoryName(name);
	}, [name]);
	return <Layout />;
};

export default Category;
