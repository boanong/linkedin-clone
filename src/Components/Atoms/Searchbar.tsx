import styled from "@emotion/styled";


export const Searchbar = styled.div`
  display: flex;
  align-items: center;
  background-color: #f3f2ef; 
  border-radius: 5px; 
  padding: 5px; 
;
`

// export const SearchIcon = styled.img `
//   width: 20px;
//   height: 20px;
//   margin: 0 10px 0 5px; 
// ;`

export const SearchInput = styled.input ` 
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  background-color: transparent;

  &::placeholder {
    color: #636363;
    
  }
;`