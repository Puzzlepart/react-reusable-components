import { ProgressIndicator } from '@fluentui/react'
import React, { FunctionComponent } from 'react'
import { IProgressProps } from './types'

export const Progress: FunctionComponent<IProgressProps> = (props: IProgressProps) => {
    return <ProgressIndicator {...props} />
}

export * from './types'
export * from './useProgress'
