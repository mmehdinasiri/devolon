interface ICatCategory {
  id: number;
  name: string;
}
interface ICat {
  breeds: string[];
  categories: ICatCategory[];
  id: string;
  url: string;
  width: number;
  height: number;
}
