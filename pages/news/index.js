import NewsList from "../../components/news/NewsList";
import news_image_1 from "../../assets/images/news/1.jpg";
import news_image_2 from "../../assets/images/news/2.jpg";

const dummy_meetups = [
  {
    id: "news1",
    title: "first title",
    image: news_image_1,
    content:
      "lots of text jhkasdkn dolsidjf sdl;fkj sjdkfsdl sd;lfjksd sdl;fkjsd;lf sd;lfjksdof sd;lfksdf s;dfljksd sd;lfksd sd;flksd sd;fl",
    description: "haha",
  },
  {
    id: "news2",
    title: "second title",
    image: news_image_2,
    content:
      "lots of text jhkasdkn dolsidjf sdl;fkj sjdkfsdl sd;lfjksd sdl;fkjsd;lf sd;lfjksdof sd;lfksdf s;dfljksd sd;lfksd sd;flksd sd;fl",
    description: "asd",
  },
];

function News() {
  return <NewsList meetups={dummy_meetups} />;
}

export default News;
