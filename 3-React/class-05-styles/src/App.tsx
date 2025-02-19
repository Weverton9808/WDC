import { useState } from "react";
import { CardManga } from "./components/CardManga";
import { Container } from "./styleaa";

export function App() {
  const [mangas, setMangas] = useState([
    {
      title: "Naruto",
      link: "https://mangaonline.biz/wp-content/uploads/2022/09/Naruto-185x278.jpg",
      manga_link: "https://mangaonline.biz/manga/boruto-naruto-next-generations/",
    },
    {
      title: "One Piece",
      link: "https://mangaonline.biz/wp-content/uploads/2022/08/One-Piece-185x278.jpg",
    },
    {
      title: "Dragon Ball",
      link: "https://mangaonline.biz/wp-content/uploads/2022/09/Dragon-Ball-Super-185x278.jpg",
    },
    {
      title: "Attack on Titan",
      link: "https://mangaonline.biz/wp-content/uploads/2022/10/Shingeki-no-Kyojin-185x278.jpg",
    },
    {
      title: "Fullmetal Alchemist",
      link: "https://upload.wikimedia.org/wikipedia/en/9/9d/Fullmetal123.jpg",
    },
    {
      title: "Death Note",
      link: "https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg",
    },
  ]);

  return (
    <Container>
      <h1>Class 05 Styles</h1>

      <div className="mangas">
        {mangas.map((manga, index) => {
          return (
            <a href={manga.manga_link} key={index}>
              <CardManga key={index} title={manga.title} link={manga.link} />
            </a>
          );
        })}
      </div>
    </Container>
  );
}
