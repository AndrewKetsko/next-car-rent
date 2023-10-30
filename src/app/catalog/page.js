import { Catalog } from "@/components/Catalog/Catalog";
import { fetchData } from "@/fetch/fetch";

export default async function CatalogPage({ searchParams }) {
  const data = await fetchData();
  // const res = await fetch("http://localhost:3000/api/users/favorite");
  // const favorite = await res.json();
  // console.log('favorite');

  console.log(favorite);
  return (
    <Catalog
      data={data}
      filter={searchParams}
      // favorite={favorite}
    />
  );
}
