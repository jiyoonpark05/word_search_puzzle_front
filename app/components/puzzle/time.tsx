import styled from "styled-components";
import { vars } from "../../theme.css";

const Time = () => {
  return (
    <Container>
      <Wrapper>
        <Timmer>
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
        </Timmer>
        <LeftTime>65c</LeftTime>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid;

  height: 5rem;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  column-gap: 1rem;
`;

const Timmer = styled.div`
  display: flex;
  flex-basis: 98%;
  grid-template-columns: repeat(6, 1fr);
  justify-content: space-around;
  height: 30px;
  border-radius: 4px;
  background-color: #f8f6e5;
`;

const Block = styled.span`
  background: #f5ca5f;
`;

const LeftTime = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export default Time;
