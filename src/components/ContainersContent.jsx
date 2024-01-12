import styled from "styled-components"

const ContainersContent = styled.div`
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 500px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

`

export default ContainersContent
