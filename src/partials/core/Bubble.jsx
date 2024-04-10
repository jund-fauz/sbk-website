import styled from "styled-components";

const Bubble = ({size, distance, position, time, delay, key, className}) => styled.div.attrs(() => ({
  className: className,
  key: key
}))`
    --size: ${size}rem;
    --distance: ${distance}rem;
    --position: ${position}%;
    --time: ${time}s;
    --delay: ${delay}s;
`

export default Bubble