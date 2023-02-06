import styled from 'styled-components';

export default function App() {
  return (
    <Container>
      <Text>This is some sample text</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 35px;
`;
