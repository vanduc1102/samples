import React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import toast, { Toaster } from "react-hot-toast";
import { Button, Container, Stack } from "@mui/material";
import LoadingIcon from "@/frontend/components/icons/LoadingIcon";

type FormValues = {
  title: string;
  url: string;
  category: string;
  description: string;
  image: FileList;
};

const CreateLinkMutation = gql`
  mutation createLink(
    $title: String!
    $url: String!
    $imageUrl: String!
    $category: String!
    $description: String!
  ) {
    createLink(
      title: $title
      url: $url
      imageUrl: $imageUrl
      category: $category
      description: $description
    ) {
      title
      url
      imageUrl
      category
      description
    }
  }
`;

const CreateFormLink = () => {
  const {
    register,
    handleSubmit,
    formState: { isDirty },
    reset,
  } = useForm<FormValues>();

  const [createLink, { loading, error }] = useMutation(CreateLinkMutation, {
    onCompleted: () => reset(),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { title, url, category, description, image } = data;
    const imageUrl = `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME}.s3.amazonaws.com/${image[0]?.name}`;
    const variables = { title, url, category, description, imageUrl };
    try {
      toast.promise(createLink({ variables }), {
        loading: "Creating new link..",
        success: "Link successfully created!🎉",
        error: `Something went wrong 😥 Please try again -  ${error}`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const uploadPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length <= 0) return;
    const file = e.target.files[0];
    const filename = encodeURIComponent(file.name);
    const res = await fetch(`/api/upload-image?file=${filename}`);
    const data = await res.json();
    const formData = new FormData();

    Object.entries({ ...data.fields, file }).forEach(([key, value]) => {
      // @ts-ignore
      formData.append(key, value);
    });

    toast.promise(
      fetch(data.url, {
        method: "POST",
        body: formData,
      }),
      {
        loading: "Uploading...",
        success: "Image successfully uploaded!🎉",
        error: `Upload failed 😥 Please try again ${error}`,
      }
    );
  };

  return (
    <Container>
      <Toaster />
      <h1 className="my-5 text-3xl font-medium">Create a new link</h1>
      <form
        className="grid grid-cols-1 gap-y-6 rounded-lg p-8 shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack>
          <label className="block">
            <span className="text-gray-700">Title</span>
            <input
              placeholder="Title"
              {...register("title", { required: true })}
              name="title"
              type="text"
              className="mt-1	 block w-full rounded-md border-gray-300 text-red-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Description</span>
            <input
              placeholder="Description"
              {...register("description", { required: true })}
              name="description"
              type="text"
              className="mt-1	 block w-full rounded-md border-gray-300 text-red-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Url</span>
            <input
              placeholder="https://example.com"
              {...register("url", { required: true })}
              name="url"
              type="url"
              className="mt-1	 block w-full rounded-md border-gray-300 text-red-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Category</span>
            <input
              placeholder="Name"
              {...register("category", { required: true })}
              name="category"
              type="text"
              className="mt-1	 block w-full rounded-md border-gray-300 text-red-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">
              Upload a .png or .jpg image (max 1MB).
            </span>
            <input
              {...register("image", { required: true })}
              onChange={uploadPhoto}
              type="file"
              accept="image/png, image/jpeg"
              name="image"
            />
          </label>

          <Button disabled={loading || !isDirty} type="submit">
            {loading ? (
              <span className="flex items-center justify-center">
                <LoadingIcon />
                Creating...
              </span>
            ) : (
              <span>Create Link</span>
            )}
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default CreateFormLink;
