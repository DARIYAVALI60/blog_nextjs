import { Button } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import BlogCard from "../components/Cards/Cards";
import NavBar from "../components/Navbar";

const Home = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Button onClick={() => signOut()}>Sign out</Button>
        <NavBar>
          <BlogCard />
        </NavBar>
        Signed in as <br />
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
