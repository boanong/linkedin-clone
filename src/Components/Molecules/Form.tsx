import styled from "@emotion/styled";

export const Form = styled.form`
    max-width: 350px;
    width: 95vw;
    background-color: transparent;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    justify-self: center;
    padding: 20px 10px;
    justify-self: center;
    margin: auto;
    gap: 12px;
    color: #000;
    @media only screen and (min-width: 768px) {
        background-color: #fff;
        max-width: 370px;
        padding: 28px 18px;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`;

export const Form1 = styled(Form)`
    padding: 15px;
    gap: 8px;
`;