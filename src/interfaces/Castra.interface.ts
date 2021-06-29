import { ButtonProps } from "./Button.interface"

export interface CastraProps extends ButtonProps {
  data: string
  buttonEdit: () => void
  buttonRemove: () => void
}