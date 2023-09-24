import React from 'react';
import styled, {ThemeProvider} from "styled-components/native";
import {theme} from './theme';
import {StatusBar} from "react-native";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.background};
  align-items: center;
  justify-content: flex-start;
`; // SafeAreaView: iOS 노치 디자인 문제 해결 (자동으로 padding 값 적용)

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({theme}) => theme.main};
  align-self: flex-start;
  margin: 0px 20px;
`;

export default function App(){
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <StatusBar barStyle="light-content"
                           backgroundColor={theme.background}/>
                <Title>TODO List</Title>
            </Container>
        </ThemeProvider>
    )
}