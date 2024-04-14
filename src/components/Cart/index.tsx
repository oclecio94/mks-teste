"use client";
import React, { useEffect, useState } from "react";

import { useCartStore } from "@/store/cart";
import {
  CartContainer,
  CartHeader,
  CartTitle,
  CloseButton,
  CartContent,
  ProductCard,
  ProductImage,
  ProductPrice,
  ProductInfo,
  ProductActions,
  ProductName,
  QuantityButton,
  CloseButton2,
  CartFooter,
  TotalPrice,
  CheckoutButton,
} from "./styles";

const Cart = ({ onClose }: any) => {
  const { cart, remove, increaseQuantity, decreaseQuantity } = useCartStore();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce(
      (acc, curr) => acc + Number(curr.price) * curr.quantity,
      0
    );
    setTotal(newTotal);
  }, [cart]);

  const handleRemoveItem = (id: number) => {
    remove(id);
  };

  const handleIncreaseQuantity = (id: number) => {
    increaseQuantity(id);
  };

  const handleDecreaseQuantity = (id: number) => {
    decreaseQuantity(id);
  };

  return (
    <CartContainer>
      <CartHeader>
        <CartTitle>Carrinho de Compras</CartTitle>
        <CloseButton onClick={onClose}>X</CloseButton>
      </CartHeader>
      <CartContent>
        {cart.map((product) => (
          <ProductCard key={product.id}>
            <ProductInfo>
              <ProductImage src={product.photo}></ProductImage>
              <ProductName>{product.name}</ProductName>
            </ProductInfo>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>Qtd:</p>
              <ProductActions>
                <QuantityButton
                  onClick={() => handleDecreaseQuantity(product.id)}
                >
                  -
                </QuantityButton>
                <span>{product.quantity}</span>
                <QuantityButton
                  onClick={() => handleIncreaseQuantity(product.id)}
                >
                  +
                </QuantityButton>
              </ProductActions>
            </div>
            <ProductPrice>R$ {Number(product.price)}</ProductPrice>
            <CloseButton2 onClick={() => handleRemoveItem(product.id)}>
              X
            </CloseButton2>
          </ProductCard>
        ))}
      </CartContent>
      <CartFooter>
        <TotalPrice>
          <p>Total: </p>
          <p>R$ {total}</p>
        </TotalPrice>
        <CheckoutButton>Finalizar Compra</CheckoutButton>
      </CartFooter>
    </CartContainer>
  );
};

export default Cart;
