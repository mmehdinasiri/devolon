import { FC } from "react";
import { CatContainer } from "./CatList.element";

const cats = [
  {
    breeds: [],
    categories: [{ id: 1, name: "hats" }],
    id: "354",
    url: "https://cdn2.thecatapi.com/images/354.jpg",
    width: 450,
    height: 600,
  },
  {
    breeds: [],
    categories: [{ id: 1, name: "hats" }],
    id: "35q",
    url: "https://cdn2.thecatapi.com/images/35q.jpg",
    width: 1024,
    height: 683,
  },
  {
    breeds: [],
    categories: [{ id: 1, name: "hats" }],
    id: "373",
    url: "https://cdn2.thecatapi.com/images/373.jpg",
    width: 2256,
    height: 1504,
  },
  {
    breeds: [],
    categories: [{ id: 1, name: "hats" }],
    id: "38t",
    url: "https://cdn2.thecatapi.com/images/38t.jpg",
    width: 1024,
    height: 683,
  },
  {
    breeds: [],
    categories: [{ id: 1, name: "hats" }],
    id: "3ar",
    url: "https://cdn2.thecatapi.com/images/3ar.jpg",
    width: 480,
    height: 360,
  },
  {
    breeds: [],
    categories: [{ id: 1, name: "hats" }],
    id: "7g9",
    url: "https://cdn2.thecatapi.com/images/7g9.jpg",
    width: 500,
    height: 332,
  },
  {
    breeds: [],
    categories: [{ id: 1, name: "hats" }],
    id: "7je",
    url: "https://cdn2.thecatapi.com/images/7je.jpg",
    width: 640,
    height: 480,
  },
  {
    breeds: [],
    categories: [{ id: 1, name: "hats" }],
    id: "MTY1NjQ1Mg",
    url: "https://cdn2.thecatapi.com/images/MTY1NjQ1Mg.jpg",
    width: 500,
    height: 375,
  },
  {
    breeds: [],
    categories: [{ id: 1, name: "hats" }],
    id: "MTY1NzM3NA",
    url: "https://cdn2.thecatapi.com/images/MTY1NzM3NA.gif",
    width: 497,
    height: 279,
  },
  {
    breeds: [],
    categories: [{ id: 1, name: "hats" }],
    id: "MTY1ODc5MA",
    url: "https://cdn2.thecatapi.com/images/MTY1ODc5MA.png",
    width: 638,
    height: 431,
  },
];
const CatList: FC = () => {
  return (
    <div>
      <CatContainer>
        {cats &&
          cats.map((catItem: ICat) => <div key={catItem.id}>{catItem.id}</div>)}
      </CatContainer>
    </div>
  );
};

export default CatList;
