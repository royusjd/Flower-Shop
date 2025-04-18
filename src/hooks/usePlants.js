import { useContext } from "react";
import PlantsContext from "../context/PlantsContext.jsx";

export function usePlants() {
	const context = useContext(PlantsContext);

	if (!context) {
		throw new Error("Must be with plants provider");
	}
	return context;
}
