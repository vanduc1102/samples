import React from "react";
import { getSession } from "@auth0/nextjs-auth0";
import type { GetServerSideProps } from "next";
import CreateFormLink from "@/frontend/modules/dashboard/components/CreateFormLink";

const DashboardPage = () => {
  return <CreateFormLink />;
};

export default DashboardPage;

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