import { useSession } from "next-auth/react";

export const ProfileData = () => {
  const { data: session } = useSession();
  const userName = session?.user?.name;
  const userEmail = session?.user?.email;
  const userImage = session?.user?.image;
  return {
    userName,
    userEmail,
    userImage,
  };
};
