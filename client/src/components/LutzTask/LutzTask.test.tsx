import { Typography } from '@material-ui/core'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import * as React from 'react'
import * as renderer from 'react-test-renderer'
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
}

describe('LutzTask Component', () => {
    beforeEach(() => {
        const setState = jest.fn()
        // @ts-ignore
        useStateMock.mockImplementation((state) => [state, setState])
    })
    it('should render correctly with react-test-renderer', () => {
        const component = renderer.create(<LutzTask {...props} />)

        expect(component).toMatchSnapshot()
    })
    it('should render correctly with enzyme', () => {
        const component = shallow(<LutzTask {...props} />)

        expect(toJson(component)).toMatchSnapshot()
    })
    it('should handle a click correctly', () => {
        const onClickMock = jest.fn()
        const component = shallow(<LutzTask onTaskDateChanged={onClickMock} />)

        component.find(Typography).simulate('click', { currentTarget: { value: 0 } })
        expect(onClickMock).toHaveBeenCalledTimes(1)
    })
})
