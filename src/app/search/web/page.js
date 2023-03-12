import WebSearchResults from "@/app/components/WebSearchResults";
import Link from "next/link";

export default async function WebSearch({ searchParams }) {
  const startIndex = searchParams.start || "1";

  await new Promise((resolve) => setTimeout(resolve, 10000));
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`
  );

  if (!response.ok) {
    console.log(response);
    throw new Error("something went wrong");
  }

  const data = await response.json();
  console.log(data);
  const results = data.items;
  if (!results) {
    return (
      <div
        className="flex flex-col justify-center items-center pt-10
    "
      >
        <h1 className="text-3xl mb-4">No result found</h1>
        <p className="text-lg">
          Try searching for something else or go back to homepage
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }

  return <>{results && <WebSearchResults results={data} />}</>;
}
//results.map((result) => <h1>{result.title}</h1>)
