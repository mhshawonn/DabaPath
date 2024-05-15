import Container from "@/components/Container";
import { getProducts, getTrendingProducts } from "@/helpers";
import { Products } from "../../../type";
import ProductsData from "@/components/ProductsData";
import SignleProduct from "@/components/SingleProduct";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const ProuctPage = async ({ searchParams }: Props) => {
  const idString = searchParams?.id;
  const id = Number(idString);
  const product =await getProducts();
  const data = await getTrendingProducts();

  return (
    <div>
      <Container>
        <SignleProduct product={product} />
        <div>
          <p className="text-xl py-1 font-semibold">Tranding Products</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {data?.map((item: Products) => (
              <ProductsData key={item.id} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProuctPage;