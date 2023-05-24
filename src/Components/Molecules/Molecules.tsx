import styled from "@emotion/styled";

export const Form = styled.div`
    max-width: 350px;
    width: 95vw;
    fit-content: fit-content;
    background-color: transparent;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    justify-self: center;
    padding: 20px 10px;
    justfify-self: center;
    margin: auto;
    gap: 18px;
    color: #000;
    @media only screen and (min-width: 768px) {
        background-color: #fff;
        max-width: 370px;
        padding: 28px 18px;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`;

export const OrSec = styled.span`
    display: flex;
    align-items: center;
    max-width: 348px;
    width: 100%;
    margin: auto;
`;

export const PassHolder = styled.div`
    max-width: 348px;
    width: 100%;
    margin: auto;
    background: #fff;
    border: 1px solid #000;
    align-items: center;
    justify-content: space-between;
    display: flex;
    border-radius: 4px !important;
`;
