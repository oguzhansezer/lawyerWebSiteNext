import Layout from "../components/Layout";
import { Block } from "../components/Block";
import { DarkBlock } from "../components/DarkBlock";
import { Lawyers } from "../components/Lawyers";
const HomePage = () => {
  return (
    <>
      <Layout>
        <Block />
        <DarkBlock />
        <Lawyers />
      </Layout>
    </>
  );
};

export default HomePage;
