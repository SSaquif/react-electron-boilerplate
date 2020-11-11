import styled from "styled-components";

const AppWindow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: blueviolet;
`;

function App() {
  return <AppWindow>Hello</AppWindow>;
}

export default App;
