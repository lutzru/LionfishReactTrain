import { TextField } from '@material-ui/core'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import * as React from 'react'
import LutzTask, { LutzTaskProps } from './LutzTask'

jest.mock('react-i18next', () => ({
    useTranslation: (): unknown => ({ t: (key: string): string => key }),
}))
jest.mock('react', () => ({
    // @ts-ignore
    ...jest.requireActual('react'),
    useState: jest.fn(),
}))

const props: LutzTaskProps = {
    onTaskDateChanged: jest.fn(),
    taskDate: '01.02.1987',
}

describe('LutzTask Component', () => {
    it('should render correctly with enzyme', () => {
        const component = shallow(<LutzTask {...props} />)

        expect(toJson(component)).toMatchSnapshot()
    })
    it('should handle a click correctly', () => {
        const onClickMock = jest.fn()
        const component = shallow(<LutzTask onTaskDateChanged={onClickMock} taskDate={'01.02.1987'} />)

        component.find(TextField).simulate('change', { target: { value: 'Test' } })
        expect(onClickMock).toHaveBeenCalledTimes(1)
    })
})
