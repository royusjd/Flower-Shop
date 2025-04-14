import CategoriesList from "./CategoriesList";
import Title from "./Title";
import "./components_style/CategoriesSection.css";

export default function CategoriesSection() {
	return (
		<section className="wrapper section-categories">
			<Title
				text1={"Shop"}
				text2={"By category"}
				showlink={false}
			/>
			<CategoriesList />
		</section>
	);
}
