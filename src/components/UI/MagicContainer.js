import styled from 'styled-components';

export default styled.div`
  pointer-events: none;
  left: 0;
  top: 0;
  height: 100vh;
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ show }) => show ? 1 : 0};
  // transition: opacity .3s;
`;
