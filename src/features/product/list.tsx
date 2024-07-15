import type { FC } from "react";
import ProductItem from "./items";

const products = [
	{ id: 1, name: "Product 1", price: 100 },
	{ id: 2, name: "Product 2", price: 200 },
	{ id: 3, name: "Product 3", price: 300 },
];

const ProductList: FC = () => {
	return (
		<div className="container mx-auto p-4">
			<h2 className="text-2xl font-bold mb-4">Products</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				{products.map((product) => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default ProductList;
