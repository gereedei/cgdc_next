import { Fragment } from "react";
import Image from "next/image";
import classes from "./NewsDetail.module.css";

function NewsDetail(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </section>
  );
}

export default NewsDetail;
