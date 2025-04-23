import { usePlants } from "../hooks/usePlants";
import DataHandler from "../utils/DataHandler";
import "./components_style/PlantCardsList.css";
import PlantCard from "./PlantCard";

export default function PlantCardsList({ filterType, limit }) {
	const { plants, loading, error } = usePlants();

	console.log(plants);

	const getFilteredPlants = (plants) => {
		let filtered = plants;
		if (filterType === "hot") {
			filtered = filtered.filter((plant) => plant.rating === 5);
		}
		return limit ? filtered.slice(0, limit) : filtered;
	};
	const filteredPlants = getFilteredPlants(plants);
	console.log(filteredPlants);

	return (
		<div className="plant-cards-list">
			<DataHandler
				loading={loading}
				error={error}
			>
				{filteredPlants.map((plant) => (
					<PlantCard
						key={plant.id}
						title={plant.title}
						price={plant.price}
						imgSrc={plant.imgSrc}
						discount={plant.discount}
					/>
				))}
			</DataHandler>
		</div>
	);
}
