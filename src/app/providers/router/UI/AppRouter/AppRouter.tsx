import { FC, Suspense } from "react";

import { Routes, Route } from "react-router-dom";

import MainLayout from "@/processes/MainLayout/MainLayout";
import { privateRoutePaths } from "@/shared/config/routes";

import { privateRouteConfig, publicRouteConfig } from "../../config";

const AppRouter: FC = () => {
	return (
		<Routes>
			<Route element={<MainLayout />} path={privateRoutePaths.home}>
				{privateRouteConfig.map(({ path, index, element }, i) => (
					<Route
						key={i}
						index={index}
						path={path}
						element={
							<Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
						}
					/>
				))}
				{publicRouteConfig.map(({ path, element }, i) => (
					<Route
						key={i}
						path={path}
						element={
							<Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
						}
					/>
				))}
			</Route>
		</Routes>
	);
};

export default AppRouter;
