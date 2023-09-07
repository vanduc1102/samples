import type { NextApiRequest, NextApiResponse } from "next";
import createPreSignUrl from "@/backend/services/s3";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const post = createPreSignUrl(req.query.file as string);
    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
}
