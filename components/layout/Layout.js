import MainNavigation from "./MainNavigation";
import TopHeader from "./TopHeader";
import Footer from "./Footer";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <TopHeader />
      <MainNavigation />
      {/* <Navigation /> */}
      {/* <BootNavbar /> */}
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
