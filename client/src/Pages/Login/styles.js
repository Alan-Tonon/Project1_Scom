import styled from 'styled-components';

export const Formsignin = styled.div`
    height: 100vh;
    width: 100%;

    background-image: url("https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltd0462ea17d90ccbc/60ee0fb9bc44fe5b48ba2a64/name-of-the-blade-splash.jpg");
    min-height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    flex-direction: column;
    align-items: center;

    display: flex;
    justify-content: center;
    align-items: center;
    text: '#D6E1DF',
    font-size: 40px;
`

export const Buttonstyles = styled.button`

    background-color:  #0060FF;
    text: '#D6E1DF',
    width: 15%;
    border: none;
    color: white;
    padding: 15px;
    
    text-align: center;
    text-decoration: none;
    display: flex;
    font-size: 16px;
    
    cursor: pointer;
    
    
`

export const InputStyle = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;