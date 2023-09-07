import s3 from "../lib/aws/s3";

const { AWS_S3_BUCKET_NAME } = process.env;

export default async function createPreSignUrl(fileName: string) {
  const post = s3.createPresignedPost({
    Bucket: AWS_S3_BUCKET_NAME,
    Fields: {
      key: fileName,
    },
    Expires: 60,
    Conditions: [["content-length-range", 0, 5048576]],
  });
  return post;
}
