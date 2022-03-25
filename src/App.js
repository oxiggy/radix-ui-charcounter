import { styled } from './stitches'

const Root = styled('div', {
  color: '$info',
  boxShadow: '0 0 0 4px $colors$info',
  paddingTop: '$4',
  mx: '24px',
})

export default function App() {

  return (
    <Root>
      Hello app
    </Root>
  );
}
