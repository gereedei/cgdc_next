import Card from "../ui/Card";
import classes from "./NewsItem.module.css";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";

function NewsItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/news/" + props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
        <div>
          <p>{props.content}</p>
        </div>
      </Card>
    </li>
  );
}

export default NewsItem;