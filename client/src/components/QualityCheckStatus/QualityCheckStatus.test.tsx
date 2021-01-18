import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import * as React from 'react'
import QualityCheckStatus, { QualityCheckStatusProps, QualityCheckStatusType } from './QualityCheckStatus'

jest.mock('react-i18next', () => ({
    useTranslation: (): unknown => ({ t: (key: string): string => key }),
}))

const props: QualityCheckStatusProps = {
    status: QualityCheckStatusType.OPEN,
}

describe('QualityCheckStatus Component', () => {
    it('should render correctly with enzyme', () => {
        const component = shallow(<QualityCheckStatus {...props} />)
        expect(toJson(component)).toMatchSnapshot()
    })
})
