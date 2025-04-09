import useFetch from "./hooks/useFetch";

export default function CategoriesList() {
	const { data: categories } = useFetch(
		"https://gist.githubusercontent.com/royusjd/fd3b339d6e122115f0fede204cbab61d/raw/0c54242ccc3f8cbe2a29d06b98346f355fb1998b/categories.json"
	);
	return <div className="categories-list">Categories</div>;
}
