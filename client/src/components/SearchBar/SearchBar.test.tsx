import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import * as React from 'react'
import SearchBar, { SearchBarProps } from './SearchBar'

jest.mock('react-i18next', () => ({
    useTranslation: (): unknown => ({ t: (key: string): string => key }),
}))
jest.mock('react', () => ({
    // @ts-ignore
    ...jest.requireActual('react'),
    useState: jest.fn(),
}))

const props: SearchBarProps = {
    onSearchTextChanged: jest.fn(),

    setIsOffen: jest.fn(),
    setIsInArbeit: jest.fn(),
    setIsFertig: jest.fn(),

    searchText: 'SearchText',
    filterStateOffen: true,
    filterStateInArbeit: true,
    filterStateFertig: true,
}

//
//  reproduzierbarer Test, testet nur die geänderte Komponente
//  eingefrorener manueller Test.  / Ordner _snapshots_ mit einchecken
//  u - erneuert den Snapshot
//

describe('SearchBar Component', () => {
    // beforeEach(() => {
    //     const setState = jest.fn()
    //     // @ts-ignore
    //     useStateMock.mockImplementation((state) => [state, setState])
    // })

    // it('should render correctly with react-test-renderer', () => {
    //     const component = renderer.create(<SearchBar {...props} />)

    //     expect(component).toMatchSnapshot()
    // })

    it('should render correctly with enzyme', () => {
        const component = shallow(<SearchBar {...props} />)

        expect(toJson(component)).toMatchSnapshot()
    })
    // it('should handle a click correctly', () => {
    //     const onClickMock = jest.fn()
    //     const component = shallow(<SearchBar onClick={onClickMock} />)

    //     component.find(Typography).simulate('click', { currentTarget: { value: 0 } })
    //     expect(onClickMock).toHaveBeenCalledTimes(1)
    // })
})
