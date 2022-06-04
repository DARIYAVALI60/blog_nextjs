import { signIn, signOut, useSession } from "next-auth/react";
import BlogCard from "../components/Cards/Cards";
import NavBar from "../components/Navbar";

const Home = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <NavBar>
          <BlogCard />
        </NavBar>
        Signed in as <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};
export default Home;
