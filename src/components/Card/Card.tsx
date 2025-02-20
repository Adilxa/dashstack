import { styled } from "styled-components";

export interface ICard {
    title: string;
    amount: string;
    underText: string;
}



const Wrapper = styled.section`
  padding: 4em;
  background: #fff;
  flex: 1;
  box-shadow: 6px 6px 54px 0px #0000000D;
  border-radius: 14px;
`;

const Card: React.FC<ICard> = ({ title, amount, underText }) => {
    return (
        <Wrapper>
            {title} <br />
            {amount} <br />
            {underText}

        </Wrapper>
    )
}


export default Card