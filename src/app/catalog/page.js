import { Catalog } from "@/components/Catalog/Catalog";
import { fetchData } from "@/fetch/fetch";

export default async function CatalogPage({ searchParams }) {
  const { cars: data } = await fetchData();

  return <Catalog data={data} filter={searchParams} />;
}
