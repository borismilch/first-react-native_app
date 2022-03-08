import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useLinkTo } from "@react-navigation/native";
import { To } from "@react-navigation/native/lib/typescript/src/useLinkTo";
import { carryFunction } from '../helpers'

interface useRouterReturnType {
  navigateTo: (path: string) => void,
  linkTo: (to: To<any, never>) => void
}

const useRouter = () => {
  const navigation = useNavigation()

  const linkTo = useLinkTo()
  const navigateTo = (path: string) => carryFunction(() => linkTo("/" + path)) 

  return { navigateTo, linkTo }
}

export default useRouter
