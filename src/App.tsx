import { QueryClient } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, type createRouter } from "@tanstack/react-router";
import type { FunctionComponent } from "./common/types";
import Header from "./features/header/header";
import Footer from "./features/footer/footer";
import ProductList from "./features/product/list";
// import { TanStackRouterDevelopmentTools } from "./components/utils/development-tools/TanStackRouterDevelopmentTools";

const queryClient = new QueryClient();

type AppProps = { router: ReturnType<typeof createRouter> };

const App = ({ router }: AppProps): FunctionComponent => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header></Header>
			<main className="flex-grow">
				<ProductList />
			</main>
			<Footer></Footer>
		</div>
	);
};

export default App;
