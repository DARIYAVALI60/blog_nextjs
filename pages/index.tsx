import BlogCard from "../components/Cards";
import NavBar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <NavBar children={<BlogCard />} />
    </>
  );
};

export default Home;
