"use client";
import { useCartStore } from "@/store/cart";
import {
  Card,
  Container,
  Title,
  Price,
  Description,
  BuyButton,
  Image,
} from "./styles";

const ProductItem = ({ product }: any) => {
  const addToCart = useCartStore((state) => state.add);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image src={product.photo} alt="image" />
      </div>

      <Container>
        <Title>{product.name}</Title>
        <Price>R$ {Number(product.price)}</Price>
      </Container>

      <Description>{product.description}</Description>
      <BuyButton onClick={handleAddToCart}>COMPRAR</BuyButton>
    </Card>
  );
};

export default ProductItem;
