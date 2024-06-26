import {FiPlus, FiX} from 'react-icons/fi'
import { Container } from './style'

export function NoteItem({isnew, value, OnClick, ...rest}){
  return (
    <Container isnew={isnew}>
      <input 
      type="text" 
      value={value}
      readOnly={!isnew}
      
      {...rest}
      />

      <button 
        type="button"
        onClick={OnClick}
        className={isnew ? 'button-add' : 'button-delete'}
        
      >
        {isnew ? <FiPlus/> : <FiX/>}
      </button>
    </Container>
  )
}