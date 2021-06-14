import styled from 'styled-components/native'
import colors from '../../styles/colors'

export const ButtonStyle = styled.TouchableOpacity`
  background-color: ${colors.brown};
  font-size: 18px;
  border-radius: 5px;
  margin-top: 10px;
`
export const ButtonStyleText = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  text-align: center;
  padding: 10px;
`