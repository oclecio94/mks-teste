"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import ProductItem from "@/components/ProductItem";
import { ContentContainer } from "./styles";

export default function Home() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC"
      ).then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <ContentContainer>
      {data.products.map((product: any, index: number) => (
        <ProductItem key={index} product={product} />
      ))}
    </ContentContainer>
  );
}
