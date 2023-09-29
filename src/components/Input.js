import React from 'react';
import styled from 'styled-components/native';
import {Dimensions} from "react-native";
import {useWindowDimensions} from "react-native";
import PropTypes from 'prop-types';

const StyledInput = styled.TextInput.attrs(({theme}) => ({
    placeholderTextColor: theme.main,
}))`
  width: ${({width}) => width - 40}px;
  height: 60px;
  margin: 3px 0;
  padding: 15px 20px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.itemBackground};
  font-size: 25px;
  color: ${({theme}) => theme.text};
`;

const Input = ({placeholder, value, onChangeText, onSubmitEditing, onBlur}) => {
    //const width = Dimensions.get('window').width; // Dimensions: 현재 기기의 화면 크기 구함 -> 다양한 기기에 동일한 모습으로 화면 적용
    const width = useWindowDimensions().width; // useWindowDimensions: Dimension과 같은 기능. Dimension과 달리 화면의 크기가 변경되면 화면의 크기, 너비, 높이를 자동으로 업데이트
    return (
        <StyledInput
            width={width}
            placeholder={placeholder}
            maxLenth={50}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
            keyboardAppearance="dark"
            value={value}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            onBlur={onBlur}
        />
    );
};

Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onSubmitEditing: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
}

export default Input;

