import NewNewsForm from "../../../components/news/NewNewsForm";

function NewNews() {
  function addNewsHandler(addedNewsData) {
    console.log(addedNewsData);
  }

  return <NewNewsForm onAddNews={addNewsHandler} />;
}
export default NewNews;
