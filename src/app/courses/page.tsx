import { getProducts, getTrendingProducts } from "@/helpers";
import React from "react";
import Container from "@/components/Container";
import ProductsData from "@/components/ProductsData";
import { Products } from "../../../type";
import Link from "next/link";

const Product = async () => {
  
  const courses = await getTrendingProducts();
  

  return (
    
    <div>
      <section className="mt-10">
        <Link href={"./courses"}>
      <h1 className="text-3xl font-semibold hover:text-orange-500 cursor-pointer duration-200 m-14"> ChessCourses</h1></Link>
    <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 -mt-15">
    
      {courses?.map((item: Products) => (
        <ProductsData item={item} key={item.id} />
      ))}
    
    </Container>
    </section>
  </div>
  
 
    

  );

}

export default Product;