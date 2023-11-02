export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const fetchData = async () => {
  const res = await fetch("https://next-car-rent.vercel.app/api/cars");
  if (!res.ok) return { cars: [] };
  return res.json();
};
