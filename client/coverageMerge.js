/* eslint-disable import/no-extraneous-dependencies */
const libCoverage = require('istanbul-lib-coverage')
const { createReporter } = require('istanbul-api')

const integrationCoverage = require('./.nyc_output/out.json')
const unitCoverage = require('./coverage/coverage-final.json')

const normalizeJestCoverage = (obj) => {
    const result = obj
    Object.entries(result).forEach(([k, v]) => {
        if (v.data) result[k] = v.data
    })
    return result
}

const map = libCoverage.createCoverageMap()
map.merge(normalizeJestCoverage(unitCoverage))
map.merge(normalizeJestCoverage(integrationCoverage))

const reporter = createReporter()
reporter.addAll(['text', 'lcov', 'text-summary'])
reporter.write(map)
