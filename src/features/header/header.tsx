import type { FC } from "react";

const Header: FC = () => {
	return (
		<header className="bg-gray-800 p-4">
			<div className="container mx-auto flex justify-between items-center">
				<div className="text-white font-bold text-lg">My E-Commerce</div>
				<nav>
					{" "}
					<ul className="flex space-x-8">
						<li>
							<a href="/" className="text-gray-300 hover:text-white">
								Home
							</a>
						</li>
						<li>
							<a href="/products" className="text-gray-300 hover:text-white">
								Products
							</a>
						</li>
						<li>
							<a href="/cart" className="text-gray-300 hover:text-white">
								Cart
							</a>
						</li>
						<li>
							<a href="/account" className="text-gray-300 hover:text-white">
								Account
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
