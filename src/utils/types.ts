import React from 'react'
import { RouteProps as RProps } from 'react-router-dom'

export interface RouteProps extends RProps {
  name?: React.ReactNode
  routes?: RouteProps[]
  layout?: boolean
  element?: React.JSXElementConstructor<any>
  showInMenu?: boolean
  bg?: string
}

export type RouteCollection = Array<{
  route: RouteProps
  reg: RegExp
}>
