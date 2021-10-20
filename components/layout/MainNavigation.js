import Link from "next/link";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>CGDC web</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home page</Link>
          </li>
          <li>
            <Link href="/news">all news</Link>
          </li>
          <li>
            <Link href="/news/new-news">Add New News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
