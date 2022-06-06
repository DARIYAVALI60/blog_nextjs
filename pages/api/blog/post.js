import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function getSevereSideProps(req, res) {
  if (req.method === "POST") {
    try {
      const userId = await prisma.user.findUnique({
        where: {
          email: req.body.email,
        },
      });
      const Post = await prisma.post.create({
        data: {
          UserId: userId?.id,
          title: req.body.title,
          content: req.body.content,
          catogory: req.body.catogory,
          createdAt: new Date(),
        },
      });
      return res.status(200);
    } catch (error) {
      console.error(error);
      res.status(501).send(error);
    }
  } else if (req.method === "GET") {
    try {
      const User = await prisma.user.findMany({
        include: {
          Posts: true,
        },
      });
      return res.status(200).json(User);
    } catch (error) {
      console.error(error);
      res.status(501).send(error);
    }
  }
}
