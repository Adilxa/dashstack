import Card, { ICard } from "../components/Card/Card";
import { styled } from 'styled-components';

const cards: ICard[] = [
    {
        title: 'Total User',
        amount: '40,689',
        underText: '8.5% Up from yesterday'
    },
    {
        title: 'Total Order',
        amount: '10293',
        underText: '1.3% Up from past week'
    },
    {
        title: 'Total Sales',
        amount: '$89,000',
        underText: '4.3% Down from yesterday'
    },
    {
        title: 'Total Pending   ',
        amount: '2040',
        underText: '1.8% Up from yesterday'
    }
]

const Wrapper = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const CardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-between;
`


const HomePage = () => {

    const render = (): any => (
        cards.map((el: ICard) => (
            <Card key={el.title} {...el} />
        ))
    )

    return (
        <Wrapper>
            <CardsWrapper>
                {render()}
            </CardsWrapper>
        </Wrapper>
    )
}


export default HomePage;