import React, { useState } from 'react'
import { IConfirmDialogProps, IUseConfirmationState } from './types'
import { ConfirmDialog } from './index'

/**
 * Confirm action using a `Dialog` from `@fluentui/react`. Specify `Dialog` properties like `title` and `subText` along
 * with a `responses` array and get back a JSX element with the dialog and a response callback function.
 */
export function useConfirmationDialog(): [JSX.Element, (props: IConfirmDialogProps) => Promise<boolean | string>] {
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
    function getResponse(props: IConfirmDialogProps) {
        return new Promise<boolean | string>((resolve) => {
            setState({
                props,
                onResponse: value => {
                    reset()
                    resolve(value)
                }
            })
        })
    }

    return [element, getResponse]
}
