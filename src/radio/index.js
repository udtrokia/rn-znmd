import React, { Component } from 'react'
import {
    Dimensions,
    PixelRatio,
} from 'react-native'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

const baseHeight = 640
const baseWidth = 360

const basePixel = 2
const devicePixel = PixelRatio.get()

//px => dp

export const hradio = deviceHeight/baseHeight/basePixel
export const wradio = deviceWidth/baseWidth/basePixel


