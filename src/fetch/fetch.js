export const fetchData =async () => {
  const res =await fetch("https://65057c21ef808d3c66f016b7.mockapi.io/adverts");
  if (!res.ok) return [];
  return res.json();
};
