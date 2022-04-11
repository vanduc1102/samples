import Link from "next/link";

export default function Pokemon() {
  return (
    <>
      <h1>Hello Pokemon</h1>
      <Link href="/">
        <a>Back to homepage</a>
      </Link>
    </>
  );
}
