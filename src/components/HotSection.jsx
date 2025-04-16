import Title from "./Title";
import "./components_style/HotSection.css";

export default function HotSection() {
	return (
		<section className="light-bg">
			<div className="wrapper hot-section">
				<Title
					text1={"Hottest"}
					text2={"Plants"}
					showlink={true}
				/>
			</div>
		</section>
	);
}
