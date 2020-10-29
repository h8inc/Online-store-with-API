import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { useAxiosGet } from "../HttpHook/HttpRequest";

function Product() {
  const { id } = useParams();
  const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`;
  let product = useAxiosGet(url);

  let content = null;

  if (product.error) {
    content = (
      <div>
        <div className="bg-blue-300 mb-2 p-3">
          If you see this message it means you're trying to access a product
          that does not exist.
        </div>
        <div className="bg-red-300 p-3">Choose another product.</div>
      </div>
    );
  }

  if (product.loading === true) {
    content = <Loader></Loader>;
  }

  if (product.data) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
        <div>
          <img src={product.data.images[0].imageUrl} alt={product.data.name} />
        </div>
        <div className="font-bold text-xl mb-3">$ {product.data.price}</div>
        <div>{product.data.description}</div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Product;
