import { storiesOf } from '@storybook/react'
import * as React from 'react'
import 'utils/ i18n'
import QualityCheckStatus, { QualityCheckStatusType } from './QualityCheckStatus'

const stories = storiesOf('QualityCheckStatus', module)

stories.add('default view', () => (
    <>
        <QualityCheckStatus status={QualityCheckStatusType.OPEN} />
        <QualityCheckStatus status={QualityCheckStatusType.IN_PROGRESS} />
        <QualityCheckStatus status={QualityCheckStatusType.FINISHED} />{' '}
        <QualityCheckStatus status={QualityCheckStatusType.BLOCKED} />
    </>
))
