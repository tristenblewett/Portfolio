import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Tristen Blewett",
  role: "Game Developer",
  introduction: "SHORT_INTRODUCTION",
  description: "TELL_ABOUT_YOURSELF",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/Resume.pdf`,
  links: {
    github: "https://github.com/tristenblewett",
    itchIO: "https://darth-dougo.itch.io",
  }
};

export const games: Game[] = [
  {
    name: "The Forgotten Knight",
    description: "GAME_DESCRIPTION",
    genres: ["2d Platformer", "Action", "Dark Fantasy", "Souls-like"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/tristenblewett/The-Forgotten-Knight" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/The_Forgotten_Knight/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/gduer9F8O1Q", type: MediaType.YouTube },
      { source: "/images/games/The_Forgotten_Knight/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/The_Forgotten_Knight/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/The_Forgotten_Knight/Screenshot_4.png", type: MediaType.Image },
    ],
  },
  {
    name: "GAME_NAME",
    description: "GAME_DESCRIPTION",
    genres: ["GAME_GENRE", "GAME_GENRE..."],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },
    ],
  }
];