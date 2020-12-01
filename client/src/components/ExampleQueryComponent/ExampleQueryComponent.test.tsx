import { Button } from '@material-ui/core'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import * as React from 'react'
import * as renderer from 'react-test-renderer'
import ExampleQueryComponent, { ExampleQueryComponentProps } from './ExampleQueryComponent'

jest.mock('react-i18next', () => ({
    useTranslation: (): unknown => ({ t: (key: string): string => key }),
}))

const props: ExampleQueryComponentProps = {
    loadLastSavedCount: jest.fn(),
    saveCount: jest.fn(),
}

describe('ExampleQueryComponent Component', () => {
    it('should render correctly with react-test-renderer', () => {
        const component = renderer.create(<ExampleQueryComponent {...props} />)

        expect(component).toMatchSnapshot()
    })
    it('should render correctly with enzyme', () => {
        const component = shallow(<ExampleQueryComponent {...props} />)

        expect(toJson(component)).toMatchSnapshot()
    })
    it('should handle a click correctly', () => {
        const onSaveMock = jest.fn()
        const onLoadMock = jest.fn()
        const component = shallow(<ExampleQueryComponent loadLastSavedCount={onLoadMock} saveCount={onSaveMock} />)

        component
            .find(Button)
            .at(0)
            .simulate('click', { currentTarget: { value: 0 } })
        expect(onSaveMock).toHaveBeenCalledTimes(1)
        component
            .find(Button)
            .at(1)
            .simulate('click', { currentTarget: { value: 0 } })
        expect(onLoadMock).toHaveBeenCalledTimes(1)
    })
})
