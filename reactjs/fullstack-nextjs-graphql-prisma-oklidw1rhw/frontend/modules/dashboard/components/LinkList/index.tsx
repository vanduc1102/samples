import { Inter } from "next/font/google";
import { gql, useQuery } from "@apollo/client";
import { Link } from "@prisma/client";
import LinkCard from "@/frontend/components/LinkCard";
import { Box, Button } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });
const AllLinksQuery = gql`
  query allLinksQuery($take: Int, $skip: Int) {
    links(take: $take, skip: $skip) {
      category
      createdAt
      description
      id
      imageUrl
      title
      updatedAt
      url
    }
  }
`;

const ITEMS_PER_PAGE = 20;
export default function LinkList() {
  const { data, loading, error, fetchMore } = useQuery(AllLinksQuery, {
    variables: { take: ITEMS_PER_PAGE, skip: 0 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="container mx-auto my-20 max-w-5xl">
        {data.links.map((link: Link) => (
          <Box key={link.id} m={1} display={"inline-block"}>
            <LinkCard link={link} />
          </Box>
        ))}
        <Box>
          <Button
            onClick={() => {
              fetchMore({
                variables: { skip: ITEMS_PER_PAGE },
                updateQuery: (prevResult, { fetchMoreResult }) => {
                  fetchMoreResult.links = [
                    ...prevResult.links,
                    ...fetchMoreResult.links,
                  ];
                  return fetchMoreResult;
                },
              });
            }}
          >
            more
          </Button>
        </Box>
      </div>
    </main>
  );
}
