import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  background-color: #fff;
  color: #000;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0px 2px 8px 0px #00000022;
  width: 100%;
  max-width: 218px;
  height: 285px;
`;

export const Image = styled.img`
  display: block;
  width: 111px;
  height: 138px;
  object-fit: contain;
  object-position: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
  width: 100%;
`;

export const Title = styled.h3`
  width: 124px;
  height: 38px;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.5px;
`;

export const Price = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 26px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  background-color: #373737;
  color: #ffffff;
`;

export const Description = styled.p`
  width: 100%;
  height: auto;
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
  color: #2c2c2c;
  padding: 6px;
`;

export const BuyButton = styled.div`
  height: 32px;
  background-color: #0f52ba;
  width: 100%;
  border-radius: 0 0 8px 8px;
  margin-bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: 600;
  bottom: 0px;
  margin-top: auto;
`;
