import { FunctionComponent } from "react";

interface ProductsProps {}
interface Product {
  id: string;
  name: string;
  price: number;
}

const Products: FunctionComponent<ProductsProps> = () => {
  let products: Product[] = [
    {
      id: "01",
      name: "Iphone 16 Plus 128 GB",
      price: 4800,
    },
    {
      id: "02",
      name: "Iphone 16 Pro 128 GB",
      price: 5200,
    },
    {
      id: "03",
      name: "Iphone 16 Pro Max 256 GB",
      price: 5700,
    },
  ];
  //   let products: Product[] = [];
  return (
    <>
      <h5 className="display-5">Products</h5>
      {products.length ? (
        products.map((product) => (
          <div key={product.id} className="card m-4" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{product.price}</h6>
              <button
                className="btn btn-success"
                onClick={() => alert(product.name)}
              >
                More info
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No Products</p>
      )}
    </>
  );
};

export default Products;
