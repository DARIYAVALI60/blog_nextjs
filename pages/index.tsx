// import BlogCard from "../components/Cards/Cards";
import axios from "axios";
import { GetServerSideProps } from "next";
import BlogCard from "../components/Cards/Cards";
import NavBar from "../components/Navbar/Navbar";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get(process.env.BlogPostGetApi as string);
  
  return { props: { PostData: res.data } };
};


const Home = ({ PostData }: any) => {
  return (
    <>
      <NavBar>
        <BlogCard data={PostData} />
      </NavBar>
    </>
  );
};

export default Home;
