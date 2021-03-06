import { Typography } from '@material-ui/core'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import * as React from 'react'
import {{ pascalCase name }}, { {{ pascalCase name }}Props }  from './{{pascalCase name}}'

jest.mock('react-i18next', () => ({
    useTranslation: (): unknown => ({ t: (key: string): string => key }),
}))
jest.mock('react', () => ({
    // @ts-ignore
    ...jest.requireActual('react'),
    useState: jest.fn(),
}))

const props: {{ pascalCase name }}Props = {
    onClick: jest.fn(),
}

describe('{{ pascalCase name }} Component', () => {
  it('should render correctly with enzyme', () => {
    const component = shallow(<{{ pascalCase name }} {...props} />)
    
    expect(toJson(component)).toMatchSnapshot()
  });
  it('should handle a click correctly', () => {
    const onClickMock = jest.fn()
    const component = shallow(<{{ pascalCase name }} onClick={onClickMock} />)

    component.find(Typography).simulate('click', { currentTarget: { value: 0 } })
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
