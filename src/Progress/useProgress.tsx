import React, { useState } from 'react'
import { Progress } from './index'
import { IProgressProps } from './types'

export function useProgress(): [JSX.Element, (label: string, description?: string) => void, () => void] {
    const [state, setState] = useState<IProgressProps>({})


    const element = state ? <Progress {...state} /> : null

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
