
import styled from 'styled-components/native'
import { StatusBar } from 'react-native'
import colors from '../../styles/colors'

export const Container = styled.SafeAreaView`
  margin: 20px;
  /* margin-top: ${StatusBar.currentHeight}px; */
`
export const CastraText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  width: 50%;
  margin: 10px 0;
`
export const InputText = styled.TextInput`
  border-bottom-width: 1px;
  border-color: ${colors.black};
  font-size: 16px;
  padding: 10px;
  width: 50%;
  margin: 20px 0;
`
