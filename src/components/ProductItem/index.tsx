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
  const addToCart = useCartStore((state) => state.add); // Obtenha a função add do hook useCartStore

  const handleAddToCart = () => {
    addToCart(product); // Adicione o produto ao carrinho ao clicar no botão "COMPRAR"
    console.log("Produtos no carrinho:", useCartStore.getState().cart);
    console.log("clicou");
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
