import { Button } from '@material-ui/core'
import ExampleComponent, { ExampleComponentProps } from 'components/ExampleComponent/ExampleComponent'
import { shallow } from 'enzyme'
import * as React from 'react'
import * as renderer from 'react-test-renderer'

jest.mock('react-i18next', () => ({
    useTranslation: (): unknown => ({ t: (key: string): string => key }),
}))

const props: ExampleComponentProps = {
    currentValue: 0,
    decreaseValue: jest.fn(),
    increaseValue: jest.fn(),
}

describe('Example Component', () => {
    it('should render correctly', () => {
        const component = renderer.create(<ExampleComponent {...props} />)

        expect(component).toMatchSnapshot()
    })

    it('should handle clicks correctly', () => {
        const decreaseValue = jest.fn()
        const increaseValue = jest.fn()
        const component = shallow(
            <ExampleComponent {...props} decreaseValue={decreaseValue} increaseValue={increaseValue} />,
        )
        component.find(Button).at(0).simulate('click')
        component.find(Button).at(1).simulate('click')
        expect(decreaseValue).toHaveBeenCalledTimes(1)
        expect(increaseValue).toHaveBeenCalledTimes(1)
    })
})
