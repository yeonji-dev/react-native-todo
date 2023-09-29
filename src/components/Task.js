import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import IconButton from "./IconButton";
import {images} from '../images';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme.itemBackground};
  border-radius: 10px;
  padding: 5px;
  margin: 3px 0px;
`;

const Contents = styled.Text`
  flex: 1;
  font-size: 24px;
  color: ${({theme, completed}) => (completed ? theme.done : theme.text)};
  text-decoration-line: ${({completed}) => (completed ? 'line-through' : 'none')};
`;

const Task = ({item, toggleTask, deleteTask}) => {
    return (
        <Container>
            <IconButton type={item.completed ? images.completed : images.uncompleted} id={item.id} onPressOut={toggleTask} completed={item.completed}/>
            <Contents completed={item.completed}>{item.text}</Contents>
            {item.completed || <IconButton type={images.update}/>}
            <IconButton type={images.delete} id={item.id} onPressOut={deleteTask} completed={item.completed}/>
        </Container>
    );
};

Task.propTypes = {
    item: PropTypes.object.isRequired,
    toggleTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
};

export default Task;