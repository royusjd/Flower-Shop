import { createContext } from "react";
import useFetch from "../hooks/useFech";

const PlantsContext = createContext();

export default function PlantsProvider({ children }) {
	const {
		data: plants,
		loading,
		error,
	} = useFetch(
		"https://gist.githubusercontent.com/royusjd/79c90e9707b13d9425f92d38fdca1a10/raw/11812b9155333f079e4ff826221fe31a16d2e40b/plant.json",
		"plants",
		"image"
	);
	const value = { plants, loading, error };
	return (
		<PlantsContext.Provider value={value}>{children}</PlantsContext.Provider>
	);
}
