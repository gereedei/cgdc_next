import MeetupItem from "./NewsItem";
import classes from "./NewsList.module.css";

function NewsList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          content={meetup.content}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default NewsList;
