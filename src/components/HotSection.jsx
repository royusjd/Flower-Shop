import Title from "./Title";
import "./components_style/HotSection.css";
import PlantCardsList from "./PlantCardsList";

export default function HotSection() {
	return (
		<section className="light-bg">
			<div className="wrapper hot-section">
				<Title
					text1={"Hottest"}
					text2={"Plants"}
					showlink={true}
				/>
				<PlantCardsList
					filterType={"hot"}
					limit={""}
				/>
			</div>
		</section>
	);
}
