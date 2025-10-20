import { AboutMeData, Game, GameDesignDocument, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Tristen Blewett",
  role: "Game Developer",
  introduction: "I am an aspiring game developer with a strong passion for creating engaging, story driven experiences that immerse players in rich, interactive worlds. I specialize in developing games with Unity and have extensive experience building and managing game servers. My goal is to craft memorable gameplay that combines technical precision with emotional storytelling.",
  description: "I've been gaming my whole life, it all started with the Super Nintendo and Super Mario World 2: Yoshi's Island.Ever since then, creating games has been a lifelong dream of mine. \n" +
  "In high school, I began exploring coding and contributed to Star Wars Roleplay severs for Garry's Mod communities, creating custom scripts, classes, and gameplay systems. That experience sparked my love for game development and collaboration.\n" +
  "During college, I took courses that deepened my understaning of the game industry learning Unity, developing game design documents, and strengthening my technical and creative skills. My previous experience working in development teams, designing systems, and coding gameplay helped me transition smoothly into Unity and C#.\n" +
  "My goal is to create fun, in-depth, story rich games that immerse players in their worlds, just like the classics that inspired me. I'm now seeking an opportunity to join a passionate studio where I can grow, learn from others, and contribute to making amazing games.",
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
    description: "Emotional storytelling of a Forgotten Knight's journey in returning to a Kingdom that once betrayed him and left him for dead. Password to try this game is Knight.",
    genres: ["2d Platformer", "Action", "Dark Fantasy", "Souls-like"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/tristenblewett/The-Forgotten-Knight" },
      { source: LinkImageSource.ItchIo, url: "https://darth-dougo.itch.io/the-forgotten-knight" },
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
    name: "The Nemesis",
    description: "A simple fun game about Larry the Monkey going to save his anime body pillow from an Evil Bady Guy. Password to try this game is nemesis.",
    genres: ["2d playformer", "Action"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://darth-dougo.itch.io/the-nemesis" },
    ],
    media: [
      { source: "/images/games/The_Nemesis/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/DalxwNhh3IM", type: MediaType.YouTube },
      { source: "/images/games/The_Nemesis/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/The_Nemesis/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/The_Nemesis/Screenshot_4.png", type: MediaType.Image },
    ],
  }
];

export const gameDesignDocs: GameDesignDocument[] = [
  {
    title: "The Forgotten Knight Game Design Document",
    description: "",
    file: `${process.env.PUBLIC_URL}/files/Forgotten Knight Game Design Document.pdf`,
  },
  {
    title: "The Nemesis Game Design Document",
    description: "",
    file: `${process.env.PUBLIC_URL}/files/The Nemesis GDD.pdf`,
  }
];