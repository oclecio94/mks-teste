import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  width: 486px;
  height: 100%;
  background-color: #0f52ba;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0px 2px 8px 0px #00000022;
  z-index: 999;

  /* Adicionando media query para dispositivos móveis */
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
`;

export const CartTitle = styled.h2`
  color: #ffffff;
  font-size: 27px;
  font-weight: 700;
`;

export const CloseButton2 = styled.button`
  background: #000000;
  border: none;
  color: #ffffff;
  font-size: 10px;
  cursor: pointer;
  width: 17px;
  height: 17px;
  font-weight: 400;
  border-radius: 50%;
  position: absolute;
  top: -7px;
  right: -7px;
`;

export const CloseButton = styled.button`
  background: #000000;
  border: none;
  color: #ffffff;
  font-size: 22px;
  cursor: pointer;
  width: 38px;
  height: 38px;
  font-weight: 400;
  border-radius: 50%;
`;

export const CartContent = styled.div`
  flex: 1;
  padding: 40px;
  overflow-y: auto;
  margin-top: 20px;
`;

export const ProductCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: 101px;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0px 2px 8px 0px #00000022;
  gap: 20px;
  position: relative;
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductName = styled.span`
  font-size: 13px;
  display: flex;
  flex-wrap: wrap;
  width: 113px;
  height: 33px;
  font-weight: 400;
  color: #2c2c2c;
`;

export const ProductPrice = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #000000;
  width: 62px;
  height: 17px;
`;

export const ProductActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50px;
  height: 19px;
  border: 1px solid #bfbfbf;
  border-radius: 4px;
`;

export const QuantityButton = styled.button`
  background: none;
  border: none;
  margin: 0 5px;
  font-size: 18px;
  cursor: pointer;
`;

export const CartFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TotalPrice = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  width: 100%;
  padding: 40px;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  height: 97px;
  background-color: #000000;
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;

  border: none;
  cursor: pointer;
`;

export const ProductImage = styled.img`
  width: 46px;
  height: 57px;
  top: 25px;
  left: 23px;
`;
