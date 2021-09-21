import type { NextPage } from 'next';
import Layout from '../components/layout/layout/Layout';
import Sliders from "../components/modules/index-page/Sliders";
import Brands from "../components/modules/index-page/Brands";

const Home: NextPage = () => {
  return (
    <Layout>
      <Brands />
      <Sliders />
    </Layout>
  );
};

export default Home;
