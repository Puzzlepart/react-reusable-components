import { ProgressIndicator } from 'office-ui-fabric-react/lib/ProgressIndicator'
import React from 'react'
import { IProgressProps } from './types'

export const Progress: React.FunctionComponent<IProgressProps> = (props: IProgressProps) => {
    return <ProgressIndicator {...props} />
}

export * from './types'
export * from './useProgress'