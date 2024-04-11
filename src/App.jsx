import "./App.css";
import { AnimeForm } from "./components/AnimeForm";
import { AnimeList } from "./components/AnimeList";

const App = () => {
	return (
		<div className="main-container">
			<h1
				style={{
					fontSize: "3rem",
					marginBottom: "2rem",
				}}
			>My Anime List</h1>
            <AnimeForm/>
            <AnimeList/>
		</div>
	);
};

export default App;
