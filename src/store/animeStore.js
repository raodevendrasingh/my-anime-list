import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

const AnimeStore = (set) => ({
	Animes: [],
	addAnime: (Anime) => {
		set((state) => ({ Animes: [Anime, ...state.Animes] }));
	},
	removeAnime: (AnimeId) => {
		set((state) => ({
			Animes: state.Animes.filter((Anime) => Anime.id !== AnimeId),
		}));
	},
	toggleAnimeStatus: (AnimeId) => {
		set((state) => ({
			Animes: state.Animes.map((Anime) =>
				Anime.id === AnimeId
					? { ...Anime, completed: !Anime.completed }
					: Anime
			),
		}));
	},
});

const useAnimeStore = create(
	devtools(
		persist(AnimeStore, {
			name: "Animes",
		})
	)
);

export default useAnimeStore;
