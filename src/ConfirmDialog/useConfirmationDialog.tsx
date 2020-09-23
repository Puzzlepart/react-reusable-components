import { IDialogContentProps } from 'office-ui-fabric-react/lib/Dialog'
import React, { useState } from 'react'
import { IUseConfirmationState } from './types'
import { ConfirmDialog } from './index'

/**
 * Returns a JSX.Element and a function to get response (boolean) from the user through a dialog
 */

export function useConfirmationDialog(): [JSX.Element, (props: IDialogContentProps) => Promise<boolean>] {
    const [state, setState] = useState<IUseConfirmationState>({})

    const reset = () => setState({ props: null, onResponse: null })

    const element = (
        <ConfirmDialog
            {...state.props}
            onResponse={state.onResponse} />
    )

    /**
     * Get response from user in Dialog
     *
     * @param {IDialogContentProps} props Dialog content props
     */
    function getResponse(props: IDialogContentProps) {
        return new Promise<boolean>((resolve) => {
            setState({
                props,
                onResponse: confirmed => {
                    reset()
                    resolve(confirmed)
                }
            })
        })
    }

    return [element, getResponse]
}
