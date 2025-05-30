import BestList from "./BestList";
import Title from "./Title";
import "./components_style/BestSection.css";

export default function BestSection() {
	return (
		<section className="wrapper best-section">
			<Title
				text1={"Best"}
				text2={"Selling"}
				showlink={true}
			/>
			<BestList />
		</section>
	);
}
