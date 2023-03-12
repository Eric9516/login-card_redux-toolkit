import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ProductList } from "../components/ProductList";
import { unsetUser } from "../reducers/user/userSlice";
import Axios from "axios";

export const Home = () => {
	const [products, setProducts] = useState([]);
	const [productoBuscado, setProductoBuscado] = useState("");
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const navigate = useNavigate();
	const handleLogOut = () => {
		dispatch(unsetUser());
		navigate("/");
	};

	useEffect(() => {
		Axios.get(
			`https://api.mercadolibre.com/sites/MLA/search?q=${productoBuscado}`
		).then((res) => {
			setProducts(res.data.results);
		});
	}, [productoBuscado]);
	return (
		<div className="container justify-content-center">
			<h2 align="center">Home</h2>
			<h4 className="mb-3">Bienvenido {user.name}</h4>
			<div>
				<input
					style={{ width: "40vw" }}
					type="text"
					className="form-control"
					placeholder="Buscar producto"
					onChange={(e) => {
						setProductoBuscado(e.target.value);
					}}
				/>
			</div>
			<button className="btn btn-primary mb-2 mt-2" onClick={handleLogOut}>
				Log Out
			</button>

			<ProductList products={products} />
		</div>
	);
};
