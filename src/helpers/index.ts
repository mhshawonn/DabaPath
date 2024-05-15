import { productData } from "@/constants/data";
// import Products from "@/components/Products";
import { Products } from "../../type";

export const getProducts = async (): Promise<Products[]> => {
  const res = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:p3Y0Dsll/chesselementhome");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return await res.json();
};


export const getCourse = async (): Promise<Products[]> => {
  const res = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:p3Y0Dsll/dabacoursehome");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return await res.json();
};

export const getallProducts = async (): Promise<Products[]> => {
  const res = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:p3Y0Dsll/chesselementall");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return await res.json();
};




export const getTrendingProducts = async () => {
  const res = await fetch(
    "https://x8ki-letl-twmt.n7.xano.io/api:p3Y0Dsll/dabacoursehome"
  );
  if (!res.ok) {
    throw new Error("Faild to fetch products");
  }
  return res.json();
};



// export const getSingleProudct = (_id: number) => {
//   const item = productData.find((product) => product._id === _id);
//   return item;
// };

// export const getSingleProudct = async()=>{
//   const res = await fetch(
//     "https://x8ki-letl-twmt.n7.xano.io/api:p3Y0Dsll/dabacoursehome"
//   );
//   if (!res.ok) {
//     throw new Error("Faild to fetch products");
//   }
//   return res.json();
// };


export const getSingleProducts = async (id: number) => {
  const res = await fetch(
    "https://x8ki-letl-twmt.n7.xano.io/api:BDenWYJ6/dabapath"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const products = await res.json();
  const item = products.find((product:Products) => product.id === id);
  return item;
};

export const calculatePercentage = (oldPrice: any, price: any) => {
  return !!parseFloat(price) && !!parseFloat(oldPrice)
    ? (100 - (oldPrice / price) * 100).toFixed(0)
    : 0;
    
};
