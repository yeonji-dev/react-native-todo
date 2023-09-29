import React from 'react';
import styled, {ThemeProvider} from "styled-components/native";
import {theme} from './theme';
import {StatusBar, Dimensions} from "react-native";
import Input from "./components/Input";
import {useState} from "react";
import {images} from './images';
import IconButton from "./components/IconButton";
import Task from './components/Task';

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

const List = styled.ScrollView`
  flex: 1;
  width: ${({width}) => width - 40}px;
`;

export default function App(){
    const width = Dimensions.get('window').width;
    const [newTask, setNewTask] = useState('');
    const _addTask = () => {
        alert(`Add: ${newTask}`);
        setNewTask('');
    };

    const _handleTextChange = (text) => {
        setNewTask(text);
    };
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <StatusBar barStyle="light-content"
                           backgroundColor={theme.background}/>
                <Title>TODO</Title>
                <Input
                    placeholder="+ Add a Task"
                    onChangeText={_handleTextChange}
                    onSubmitEditing={_addTask}
                />
                <List width={width}>
                    <Task text="YeonJi"/>
                    <Task text="React Native Todo App"/>
                </List>
            </Container>
        </ThemeProvider>
    )
}