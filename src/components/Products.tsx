import { getCourse, getProducts, getTrendingProducts } from "@/helpers";
import React from "react";
import Container from "./Container";
import ProductsData from "./ProductsData";
import { Products } from "../../type";
import Link from "next/link";


const Product = async () => {
  const products = await getProducts();
  const courses = await getCourse();
  

  return (
    
    <div>
      <section className="mt-10">
        <Link href={"./courses"}>
      <h1 className="text-3xl font-semibold hover:text-orange-500 cursor-pointer duration-200 m-14"> ChessCourse</h1></Link>
    <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 -mt-15">
    
      {courses?.map((item: Products) => (
        <ProductsData item={item} key={item.id} />
      ))}
    </Container>
        <Link href={"./courses"}>
        <button className="py-3 px-6 rounded-full bg-slate-200 hover:bg-white duration-200 text-sm uppercase font-semibold mx-16">
            Find out more
          </button>
          </Link>
    </section>
      <section>
        <Link href={"./chessproduct"}>
      <h1 className="text-3xl font-semibold hover:text-orange-500 cursor-pointer duration-200 m-14"> ChessProduct</h1></Link>
    <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 -mt-30">
    
      {products?.map((item: Products) => (
        <ProductsData item={item} key={item.id} />
      ))}
    </Container>
        <Link href={"./chessproduct"}>
    <button className="py-3 px-6 rounded-full bg-slate-200 hover:bg-white duration-200 text-sm uppercase font-semibold mb-10 mx-16 ">
            Find out more
          </button>
          </Link>
    
    </section>
  </div>
  
 
    

  );

}

export default Product;