import LinkList from "@/frontend/modules/dashboard/components/LinkList";
import { getSession } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";

export default function TasksPage() {
  return <LinkList />;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession(req, res);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/api/auth/login",
      },
      props: {},
    };
  }

  return {
    props: {},
  };
};
