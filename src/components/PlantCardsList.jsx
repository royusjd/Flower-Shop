import { usePlants } from "../hooks/usePlants";
import DataHandler from "../utils/DataHandler";
import "./components_style/PlantCardsList.css";
import useFetch from "../hooks/useFech";

export default function PlantCardsList({ filterType, limit }) {
	const { plants, loading, error } = usePlants();
	console.log(plants);
	return (
		<div className="plant-cards-list">
			<DataHandler
				loading={loading}
				error={error}
			></DataHandler>
		</div>
	);
}
