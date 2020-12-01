import { GetTestIDReturn } from '../../src/utils/TestIDs'

const getId = (id: GetTestIDReturn, extra?: string) => cy.get(`[data-testid=${id['data-testid']}${extra ? extra : ''}]`)

export default getId
