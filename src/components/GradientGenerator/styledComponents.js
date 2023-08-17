// Style your elements here
import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  height: 100vh;
  background-size: cover;
`
export const MainHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
`
export const ChooseDirection = styled.p`
  font-family: 'Roboto';
  color: #ededed;
`

export const UnOrderListButtonElements = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const PickTheColors = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
`

export const InputColor = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  margin: 20px;
  margin-top: 0px;
`

export const ColorPickerValue = styled.p`
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  margin-left: 40px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  border: none;
  border-radius: 5px;
  font-family: 'Roboto';
  height: 40px;
  width: 100px;
  margin-top: 50px;
  cursor: pointer;
`
