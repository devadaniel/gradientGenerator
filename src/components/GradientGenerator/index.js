import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientGeneratorContainer,
  MainHeading,
  ChooseDirection,
  UnOrderListButtonElements,
  PickTheColors,
  InputContainer,
  ColorPickerValue,
  InputColor,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

// Write your code here

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: ` to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  changeDirection = value => {
    this.setState({activeGradientDirection: value})
  }

  onChangeFromColorInput = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onChangeToColorInput = event => {
    this.setState({toColorInput: event.target.value})
  }

  onClickGenerateColor = () => {
    const {activeGradientDirection, fromColorInput, toColorInput} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection} ,${fromColorInput} ,${toColorInput}`,
    })
  }

  render() {
    const {
      activeGradientDirection,
      fromColorInput,
      toColorInput,
      gradientValue,
    } = this.state
    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <>
          <MainHeading>Generate a CSS Color Gradient</MainHeading>
          <ChooseDirection>Choose Direction</ChooseDirection>
          <UnOrderListButtonElements>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                gradientDirectionDetails={eachDirection}
                changeDirection={this.changeDirection}
                isActive={activeGradientDirection === eachDirection.value}
              />
            ))}
          </UnOrderListButtonElements>
          <PickTheColors>Pick the Colors</PickTheColors>
          <InputContainer>
            <>
              <ColorPickerValue>{fromColorInput}</ColorPickerValue>
              <InputColor
                type="color"
                value={fromColorInput}
                onChange={this.onChangeFromColorInput}
              />
            </>
            <>
              <ColorPickerValue>{toColorInput}</ColorPickerValue>
              <InputColor
                type="color"
                value={toColorInput}
                onChange={this.onChangeToColorInput}
              />
            </>
          </InputContainer>
        </>
        <>
          <GenerateButton type="button" onClick={this.onClickGenerateColor}>
            Generate
          </GenerateButton>
        </>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
