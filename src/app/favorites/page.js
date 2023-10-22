import { Catalog } from "@/components/catalog/Catalog";
import { fetchData } from "@/fetch/fetch";

export default async function FavoritePage({ searchParams }) {
  const data = await fetchData();
  return <Catalog data={data} filter={searchParams} />;
}