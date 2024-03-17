import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react"
import React, { version } from 'react'
import { LANGUAGE_VERSIONS } from '../constants'


const languages = Object.entries(LANGUAGE_VERSIONS)
const ACTIVE_COLOR = "blue.300"

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <Box ml = {1.5} mb = {5}>
    <Text mb = {3} fontSize = "lg">Language: </Text>
    <Menu isLazy>
  <MenuButton as={Button} >
    {language}
  </MenuButton>
  <MenuList bg = '#110c1b'>
    {
      languages.map(([lang, version]) => (
        <MenuItem key = {lang}
          color = {
            lang === language ? ACTIVE_COLOR: ""

          }
          bg = {
            lang === language ? "gray.800" : "transparent"
          }

          _hover={
            {
              color : ACTIVE_COLOR,
              bg : "gray.840"
            }
          }
            


          onClick = {()=> onSelect(lang)}
          >{lang}
       
        &nbsp;
        <Text as = "span" colors = "gray.550" fontSize = "sm">({version})</Text>
        </MenuItem>
      ))}
  </MenuList>
</Menu>

    </Box>

  )
}

export default LanguageSelector