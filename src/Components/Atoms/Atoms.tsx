import styled, { css } from "styled-components";
import { FaLinkedin } from "react-icons/fa"

export const LinkedInIcon = styled(FaLinkedin)`
    color: #0a66c2;
    font-size: 40px;
    font-weight: 500;
    height: inherit;
`;

export const Linked = styled.h2`
    color: #0a66c2;
    font-size: 28px;
    font-weight: 800;
    display: flex;
`;

export const FormHeading = styled.h1`
    font-size: 3.2rem;
    line-height: 1.25;
    font-weight: 600;
    color: #000;
`

export const Ptag =  styled.p`
    font-size: 1.4rem;
    line-height: 1.42857;
    font-weight: 400;
    color: #000;  
`;

export const InputCredentials = styled.input`
    font-size: 1.8rem;
    line-height: 1.33333;
    font-weight: 400;
    color: rgba(0,0,0,0.9);
    position: relative;
    padding: 28px 12px 6px;
    border-radius: 4px !important;
`;

export const ForgotPass =  styled.a`
    color: #0a66c2;
    text-decoration: none;
    font-weight: 400;
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: 600;
    font-family: inherit;
    line-height: 32px;
`;

export const SubmitBtn = styled.button`
    width: 94vw;
    max-width: 270px;
    text-align: center;
    color: #fff;
    border: none;
    border-radius: 25%;
    padding: 24px;
    background-color: #0a66c2;
    margin: auto;
    font-size: 1.6rem;
    font-weight: 600;
`;

export const Label = styled.label`
    font-size: 15px;
    text-align left
`;

export const SocilaLogBtn = styled.button`
    width: 94vw;
    max-width: 270px;
    text-align: center;
    color: #fff;
    border: none;
    border-radius: 25%;
    padding: 12px;
    background-color: #000;
    margin: auto;
    font-size: 1rem;
    font-weight: 400;
`;
