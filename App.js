import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import PressableButton from './components/Button';

export default function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <Container>
      <PressableButton
        onPress={incrementCount}
        bgColor={'teal'}
        title={'Press Me!'}
      ></PressableButton>
      <Text>{count}</Text>
      <Text>This is text</Text>
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
