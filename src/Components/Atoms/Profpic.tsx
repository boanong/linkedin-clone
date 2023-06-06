import styled from "@emotion/styled";

export const Profpic = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center right;
  background-color: white;
  border: 2px solid var(--color-white);
  box-shadow: inset 0 1.5px 3px 0 var(--black-a15, rgba(0, 0, 0, 0.15)),
    0 1.5px 3px 0 var(--black-a15, rgba(0, 0, 0, 0.15));
  display: flex;
  margin: -38px auto 12px;
`;

export const Profpic2 = styled.img`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  object-fit: cover;
  object-position: center right;
  background-color: white;
  border: 2px solid var(--color-white);
  box-shadow: inset 0 1.5px 3px 0 var(--black-a15, rgba(0, 0, 0, 0.15)),
    0 1.5px 3px 0 var(--black-a15, rgba(0, 0, 0, 0.15));
  @media only screen and (min-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;