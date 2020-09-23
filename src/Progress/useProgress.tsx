import React, { useState } from 'react'
import { Progress } from './index'
import { IProgressProps } from './types'

/**
 * Show progress
 * 
 * @param {IProgressProps} defaultProps Default props
 */
export function useProgress(defaultProps: IProgressProps = {}): [JSX.Element, (label: string, description?: string) => void, () => void] {
    const [state, setState] = useState<IProgressProps>(null)

    const props = { ...defaultProps, ...state }
    const element = state ? <Progress {...props} /> : null

    /**
     * Start progress
     * 
     * @param {string} label Label
     * @param {string} description Description 
     */
    function start(label: string, description?: string) {
        setState({ label, description })
    }

    /**
    * Stop progress
    */
    function stop() {
        setState(null)
    }

    return [element, start, stop]
}
