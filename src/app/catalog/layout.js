import { Form } from "@/components/search-form/Form";
import { fetchData } from "@/fetch/fetch";

export default async function CatalogLayout({ children }) {
  const data = await fetchData();
  return (
    <>
      <Form data={data} /> {children}
    </>
  );
}
