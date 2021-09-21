import type { NextPage } from 'next';
import Layout from '../components/layout/layout/Layout';
import Sliders from "../components/modules/index-page/Sliders";
import Brands from "../components/modules/index-page/Brands";
import PopularProducts from "../components/modules/index-page/PopularProducts";

const Home: NextPage = () => {
  return (
    <Layout>
      <Brands />
      <Sliders />
      <PopularProducts />
    </Layout>
  );
};

export default Home;
