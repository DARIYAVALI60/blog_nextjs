import BlogCard from "../components/cards/Cards";
import NavBar from "../components/Navbar";
import NewBlog from "../components/NewBlog";

const newblog = () => {
  return (
    <>
      <NavBar>
        <NewBlog />
      </NavBar>
    </>
  );
};

export default newblog;
