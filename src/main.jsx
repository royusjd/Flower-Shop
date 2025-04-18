import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PlantsProvider from "./context/PlantsContext.jsx";

createRoot(document.getElementById("root")).render(
	<PlantsProvider>
		<App />
	</PlantsProvider>
);
