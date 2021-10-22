import { Fragment } from "react";
import Head from "next/head";

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Компанийн засаглалын хөгжлийн төв</title>
        <meta
          name="description"
          content="Монгол улс дахь Компанийн засаглалын хөгжлийн төв"
        />
      </Head>
      <div className="text-danger">home page ni bna aa</div>
      <div className="bg-danger">home page ni bna aa</div>
    </Fragment>
  );
}

export default HomePage;
