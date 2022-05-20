//rafce

import React from 'react'
import { text, Image, view } from 'react-native'


const CatComponent = (props) => {
  return (
<view>

    <text>Hola soy un gato y mi nombre es {props.nombre} y mi raza es {props.raza}</text>
    <Image 
    source={{uri: props.foto }}
    style={{width: 200, height: 200}}
    ></Image>

</view>
  )
}

export default CatComponent