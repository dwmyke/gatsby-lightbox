import styled from 'styled-components';

const Landing = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: 10vw 30vw 10vw;
grid-gap: 1em;
`;

const LandingHeader = styled.h1`
grid-column: 1 / span 3;
`;

const Video = styled.button`
grid-column: span 2;
`;

export default Landing