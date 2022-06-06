import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { useSession } from "next-auth/react";
//http://localhost:3000/api/like
export default function like(req: NextApiRequest, res: NextApiResponse) {
  // const prisma = new PrismaClient();
  // const { data: session } = useSession();
  // if (session) {
  //   if (req.method === "POST") {
  //   }
  // }
}
