import { css } from '@emotion/react'
import Button from './components/Button';

const style = css`
  color: hotpink;
`

const SomeComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
    <h1 css={{fontSize: 40, color: 'blue'}}>제목 입니다.</h1>
    <Button>TEST button</Button>
  </div>
)

function App() {
  return (
    <div>
      <SomeComponent></SomeComponent>
    </div>
  );
}

export default App;
