import { ButtonProps } from "./Button.interface"

export interface VacinaParamProps {
  id: number
  nome: string
  data: string
}

export interface VacinaProps extends ButtonProps {
  buttonEdit: () => void
  buttonRemove: (item: VacinaParamProps) => void
  vacinacao: {
    id: number
    nome: string
    data: string
  }[]
}