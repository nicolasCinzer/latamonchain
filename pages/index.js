import Head from "next/head";
import styles from "../styles/Home.module.css";

import Welcome from "../components/home/Welcome";
import Layout from "../components/Layout";
import Roadmaps from "../components/home/roadmaps/Roadmaps";

const Home = () => {
  return (
    <Layout title="Home - LATAMonChain">
      <div className="grid grid-cols-1 place-items-center p-8 h-full">
        <Welcome />
        <Roadmaps />
      </div>
    </Layout>
  );
};

export default Home;
