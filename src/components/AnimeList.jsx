import useAnimeStore from "../store/animeStore";

export const AnimeList = () => {
	const { Animes, removeAnime, toggleAnimeStatus } = useAnimeStore(
		(state) => ({
			Animes: state.Animes,
			removeAnime: state.removeAnime,
			toggleAnimeStatus: state.toggleAnimeStatus,
		})
	);
	return (
		<>
			<ul>
				{Animes.map((Anime, id) => {
					return (
						<div key={id}>
							<li
								className={`course-item`}
								style={{ backgroundColor: Anime.completed ? "green" : "orange" }}
							>
								<span className="course-item-col-1">
									<input
										type="checkbox"
										checked={Anime.completed}
										onChange={() => toggleAnimeStatus(Anime.id)}
									/>
								</span>
								<span>{Anime?.title}</span>
								<button
									className="delete-btn"
									onClick={() => removeAnime(Anime.id)}
								>
									Remove
								</button>
							</li>
						</div>
					);
				})}
			</ul>
		</>
	);
};
