import useFetch from "../hooks/useFech";
import DataHandler from "../utils/DataHandler";
import BestCard from "./BestCard";

export default function BestList() {
	const {
		data: bestcards,
		loading,
		error,
	} = useFetch(
		"https://gist.githubusercontent.com/royusjd/595d79b0c989e60a548cbd419920f835/raw/f26a98bdd07f794123c831e4fae0a33a660746b7/BestTags.json",
		"best",
		"fileName"
	);
	console.log(bestcards);
	return (
		<div className="best-list">
			<DataHandler
				loading={loading}
				error={error}
			>
				{bestcards.map((card) => (
					<BestCard
						key={card.id}
						imgSrc={card.imgSrc}
						title={card.title}
					/>
				))}
			</DataHandler>
		</div>
	);
}
