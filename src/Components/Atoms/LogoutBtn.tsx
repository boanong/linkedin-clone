import styled from "@emotion/styled";

export const LogoutBtn = styled.button`
    color: #000;
    font-size: 15px;
    cursor: pointer;
    width: 100%;
    padding: 5px 10px;
    text-align: center;
    @media only screen and (max-width: 770px) {
        &:hover {
            background-color: #8d8c8c;
        }
    }
`;