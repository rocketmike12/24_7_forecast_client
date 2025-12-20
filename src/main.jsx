import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AuthProvider } from "./contexts/AuthContext.jsx";
import { LoadingProvider } from "./contexts/LoadingContext.jsx";

import { App } from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<LoadingProvider>
			<AuthProvider>
				<App />
			</AuthProvider>
		</LoadingProvider>
	</StrictMode>
);
