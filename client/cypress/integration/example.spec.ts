import TestIDs from '../../src/utils/TestIDs'
import getId from '../support/getId'

describe('Example Page', () => {
    before(function () {
        cy.visit('/')
    })

    it('contains the text and the counter', () => {
        getId(TestIDs.GET_EXAMPLE('EXAMPLE_TEXT'))
        getId(TestIDs.GET_EXAMPLE('EXAMPLE_COUNTER'))
    })

    it('click the buttons to change the counter', () => {
        // Check for single form elements and default state
        getId(TestIDs.GET_EXAMPLE('EXAMPLE_PLUS')).click()
        getId(TestIDs.GET_EXAMPLE('EXAMPLE_COUNTER')).contains('1')
        getId(TestIDs.GET_EXAMPLE('EXAMPLE_MINUS')).click()
        getId(TestIDs.GET_EXAMPLE('EXAMPLE_COUNTER')).contains('0')
    })
})
