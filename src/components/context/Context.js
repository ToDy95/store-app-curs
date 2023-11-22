import React, {
	createContext,
	useState,
	useEffect,
	useDeferredValue,
	useSyncExternalStore,
} from "react";

export const globalProvider = createContext();
const Context = ({ children }) => {
	const [a, setA] = useState("abc");
	const [data, setData] = useState([]);
	const [user, setUser] = useState({});
	const [singleData, setSingleData] = useState(null);
	const [searchData, setSearchData] = useState([]);
	const [input, setInput] = useState("");
	const deferredQuery = useDeferredValue(input);
	const [dataSearch, setDataSearch] = useState("");
	const [url, setUrl] = useState("https://dummyjson.com/products");
	const [searchUrl, setSearchUrl] = useState(
		"https://dummyjson.com/products/search?q="
	);
	const [categoryProduct, setCategoryProduct] = useState([]);
	const [singleProductUrl, setSingleProductUrl] = useState(
		"https://dummyjson.com/products/"
	);
	const [singleProduct, setSingleProduct] = useState("");
	const [categoryUrl, setCategoryUrl] = useState(
		"https://dummyjson.com/products/category/"
	);
	const [categoryName, setCategoryName] = useState("");

	const getData = async (url) => {
		const response = await fetch(url);
		const result = await response.json();
		setData(result.products);
	};

	const getSingleData = async (url) => {
		const response = await fetch(url);
		const result = await response.json();
		setSingleData([result]);
	};

	const getSearchData = async (url) => {
		const response = await fetch(url);
		const result = await response.json();
		setSearchData(result.products);
	};

	const getCategoryData = async (url) => {
		const response = await fetch(url);
		const result = await response.json();
		setCategoryProduct(result.products);
		console.log(result)
	};
	useEffect(() => {
		if (categoryName) getCategoryData(categoryUrl + categoryName);
	}, [categoryName]);

	// Get product by id
	useEffect(() => {
		if (singleProduct) getSingleData(singleProductUrl + singleProduct);
	}, [singleProduct]);
	//  Get product from search

	useEffect(() => {
		getSearchData(searchUrl + dataSearch);
	}, [dataSearch]);

	//  Get all products
	useEffect(() => {
		getData(url);
	}, [url]);
	useEffect(() => {
		localStorage.setItem("token_store_app", user.token);
	}, [user, localStorage]);

	//logalStorage
	const token = useSyncExternalStore(subscribe, getSnapshot);

	function subscribe(callback) {
		window.addEventListener("store", callback);
		return () => {
			window.removeEventListener("store", callback);
		};
	}

	//Return the current value from the browser API
	function getSnapshot() {
		//alert("localStorage changed")
		return localStorage.getItem("token_store_app");
	}
	//logalStorage

	return (
		<globalProvider.Provider
			value={{
				currentData: [data, setData],
				inputSearch: [deferredQuery, setInput],
				searchedData: [dataSearch, setDataSearch],
				oneProduct: [singleProduct, setSingleProduct],
				oneProductData: [singleData, setSingleData],
				dataFromSearch: [searchData, setSearchData],
				appUser: [user, setUser],
				tokenAuth: token,
				categoryData: [categoryUrl, setCategoryUrl],
				b: [a, setA],
				productCategory: [categoryProduct, setCategoryProduct],
				cName: [categoryName, setCategoryName],
			}}
		>
			{children}
		</globalProvider.Provider>
	);
};

export default Context;
