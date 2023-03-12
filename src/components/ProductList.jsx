import { useDispatch, useSelector } from "react-redux";
import {
	addProductToCart,
	removeProductFromCart,
} from "../reducers/cart/cartSlice";

export const ProductList = ({ products }) => {
	const dispatch = useDispatch();
	const { productsList } = useSelector((state) => state.cart);
	console.log(productsList);

	const handleAddOrRemoveProduct = (productId) => {
		const product = products.find((product) => product.id === productId);
		if (productsList.find((pdt) => pdt.id == productId)) {
			dispatch(removeProductFromCart(productId));
		} else {
			dispatch(addProductToCart(product));
		}
	};

	return (
		<>
			<h2>Listado de productos</h2>
			<div className="row">
				{products.map((product) => {
					return (
						<div className="col-3 mt-3" key={product.id}>
							<img src={product.thumbnail} />
							<p>
								<b>Price:</b> {product.price}
							</p>
							<p>
								<b>Price:</b> {product.id}
							</p>
							<p>
								<b>Title:</b> {product.title}
							</p>
							<button
								className={`btn ${
									productsList.find((prod) => prod.id === product.id)
										? "btn-danger"
										: "btn-success"
								}`}
								onClick={() => handleAddOrRemoveProduct(product.id)}
							>
								{productsList.find((prod) => prod.id === product.id)
									? "Remove"
									: "Add"}{" "}
								to Cart
							</button>
						</div>
					);
				})}
			</div>
		</>
	);
};
