import { FC } from "react";
import { Link } from "react-router-dom";
import { Layout } from "src/components";

const Home: FC = () => {
  return (
    <Layout>
      <h1>Welcome to test project of Devolon</h1>
      <h3>
        For this project i used react, redux-toolkit, react-router-dom and
        styled-component as ui kit.
      </h3>
      <p>
        This is first time that i used style-component and wrote test for my
        app.
      </p>
      <Link to="/cats">Lets go check cats</Link>
    </Layout>
  );
};

export default Home;
