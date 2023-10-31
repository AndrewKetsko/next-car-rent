export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const fetchData = async () => {
  const res = await fetch(
    "http://localhost:3000/api/cars"
  );
  if (!res.ok) return [];
  return res.json();
};
