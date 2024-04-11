import { useState } from "react";
import useAnimeStore from "../store/animeStore";

export const AnimeForm = () => {
	const addAnime = useAnimeStore((state) => state.addAnime);
	const [Anime, setAnime] = useState("");
	// console.log("Anime form rendered");

	const handleAnimeSubmit = (event) => {
		if (!Anime) return alert("Please enter a Anime");
		addAnime({
			id: Math.ceil(Math.random() * 1000),
			title: Anime,
		});
        setAnime('')
	};

	return (
		<div className="form-container">
			<input
				type="text"
				className="form-input"
				value={Anime}
				onChange={(event) => setAnime(event.target.value)}
				placeholder="Enter Anime"
			/>
			<button className="form-submit-btn" onClick={handleAnimeSubmit}>
				Add Anime
			</button>
		</div>
	);
};
