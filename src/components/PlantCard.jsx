import Button from "./Button";
import "./components_style/PlantCard.css";

export default function PlantCard({ plantId, title, imgSrc, price, discount }) {
	// const discountedPrice = discount ? (price * (1 - discount/100)).toFixed(2)
	const discountedPrice = discount
		? (price * (1 - discount / 100)).toFixed(2)
		: price.toFixed(2);

	return (
		<div className="plant-card">
			<a href="">
				<div className="img-box">
					{discount > 0 && (
						<div className="discount-block">
							<div>{discount}%</div>
							<div>off</div>
						</div>
					)}
					<img
						src={imgSrc}
						alt={title}
					/>
				</div>
				<div className="card-text">
					<h3 className="plant-title">{title}</h3>
					{discount > 0 ? (
						<>
							<span className="discounted-price">${discountedPrice}</span>
							<span className="plant-price-red">{price}</span>
						</>
					) : (
						<span className="plant-price">{price}</span>
					)}
				</div>
			</a>
			<Button colorName={"green-btn"}>Buy</Button>
		</div>
	);
}
