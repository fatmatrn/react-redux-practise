import React from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setDarkMode } from '../../store/slice/theme-slice';

const DarkMode = () => {

  const darkMode =  useSelector((state)=>state.theme.darkMode);//useSelector bize tum state yi getirir
  const dispatch = useDispatch();//guncelleme


  return (
    <div>

<Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label={darkMode  ? "Light Mode"  : "Dark Mode"}
        checked={darkMode}
        onChange={()=>dispatch(setDarkMode(!darkMode))}
      />

    </div>
  )
}

export default DarkMode