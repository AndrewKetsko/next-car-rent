import { Form } from "@/components/Search-form/Form";
import { fetchData } from "@/fetch/fetch";

export default async function CatalogLayout(props) {
  console.log(props);
  const data = await fetchData();
  return (
    <>
      <Form data={data} /> {props.children}
      {props.modal}
    </>
  );
}
