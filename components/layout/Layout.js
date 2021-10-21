import MainNavigation from "./MainNavigation";
import TopHeader from "./TopHeader";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <TopHeader />
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
