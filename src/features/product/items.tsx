import type { FC } from "react";

type Product = {
	id: number;
	name: string;
	price: number;
};

type ProductItemProps = {
	product: Product;
};

const ProductItem: FC<ProductItemProps> = ({ product }) => {
	return (
		<div className="border p-4 rounded-lg shadow-md">
			<h3 className="text-xl font-semibold">{product.name}</h3>
			<p className="text-gray-600">${product.price}</p>
			<button className="mt-2 bg-blue-500 text-white p-2 rounded">
				Add to Cart
			</button>
		</div>
	);
};

export default ProductItem;
