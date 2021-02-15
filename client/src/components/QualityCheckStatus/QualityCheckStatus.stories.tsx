import { storiesOf } from '@storybook/react'
import { CollectionDeliveryState } from 'graphqltypes/globalTypes'
import * as React from 'react'
import 'utils/ i18n'
import QualityCheckStatus from './QualityCheckStatus'

const stories = storiesOf('QualityCheckStatus', module)

stories.add('default view', () => (
    <>
        <QualityCheckStatus status={CollectionDeliveryState.OFFEN} />
        <QualityCheckStatus status={CollectionDeliveryState.IN_ARBEIT} />
        <QualityCheckStatus status={CollectionDeliveryState.FERTIG} />{' '}
    </>
))
