import React, {useState} from 'react';
import HexColorPicker from 'react-colorful';

const ColorSelect = () => {
    const [color, setColor] = useState('');
    return (<HexColorPicker color={color}/>)
}

export default ColorSelect;