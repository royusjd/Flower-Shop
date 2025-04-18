import { usePlants } from "../hooks/usePlants";
import DataHandler from "../utils/DataHandler";
import "./components_style/PlantCardsList.css";
import useFetch from "../hooks/useFech";

export default function PlantCardsList({ filterType, limit }) {
	// const { plants, loading, error } = usePlants();
	const {
		data: plants,
		loading,
		error,
	} = useFetch(
		"https://gist.githubusercontent.com/royusjd/79c90e9707b13d9425f92d38fdca1a10/raw/11812b9155333f079e4ff826221fe31a16d2e40b/plant.json",
		"plants",
		"image"
	);
	return (
		<div className="plant-cards-list">
			<DataHandler
				loading={loading}
				error={error}
			></DataHandler>
		</div>
	);
}
