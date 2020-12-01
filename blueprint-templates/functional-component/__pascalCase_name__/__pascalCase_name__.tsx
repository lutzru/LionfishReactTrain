import * as React from 'react'
import { Typography } from '@material-ui/core'

export interface {{ pascalCase name }}Props {
  onClick: () => void
}

const {{ pascalCase name }} = (props: {{ pascalCase name }}Props): JSX.Element => {

  const { onClick } = props

  return (
    <Typography onClick={onClick}>
    </Typography>
  )
}

export default {{ pascalCase name }}