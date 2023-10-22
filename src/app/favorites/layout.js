import { Form } from "@/components/Search-form/Form";
import { fetchData } from "@/fetch/fetch";

export default async function FavoriteLayout({ children }) {
  const data = await fetchData();
  return (
    <>
      <Form data={data} /> {children}
    </>
  );
}
