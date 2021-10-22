import { useRouter } from "next/dist/client/router";
import NewNewsForm from "../../../components/news/NewNewsForm";

function NewNews() {
  const router = useRouter();

  async function addNewsHandler(addedNewsData) {
    const response = await fetch("/api/new-news", {
      method: "POST",
      body: JSON.stringify(addedNewsData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    console.log(data, "news added");

    // router.replace; use this if you do not want it to go back with back button
    router.push("/");
  }

  return <NewNewsForm onAddNews={addNewsHandler} />;
}
export default NewNews;
