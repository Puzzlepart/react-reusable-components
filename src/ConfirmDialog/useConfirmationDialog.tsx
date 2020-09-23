import { IDialogContentProps } from 'office-ui-fabric-react/lib/Dialog'
import React, { useState } from 'react'
import { IUseConfirmationState } from './types'
import { ConfirmDialog } from './index'

/**
 * Confirm action using a Dialog
 */
export function useConfirmationDialog(): [JSX.Element, (props: IDialogContentProps) => Promise<boolean>] {
    const [state, setState] = useState<IUseConfirmationState>({})

    const reset = () => setState({ props: null, onResponse: null })

    const element = state.props && (
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
