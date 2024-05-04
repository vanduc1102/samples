"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function FooRemoteComponent() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:4000/api/products/foo",
    fetcher,
  );
  return (
    <div>
      <h2>Data from server:</h2>
      {JSON.stringify(data, null, 4)}
    </div>
  );
}
