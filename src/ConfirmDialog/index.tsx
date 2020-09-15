import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button'
import { Dialog, DialogFooter, DialogType, IDialogContentProps } from 'office-ui-fabric-react/lib/Dialog'
import React, { useState } from 'react'
import { IConfirmDialogProps, IUseConfirmationState } from './types'

/**
 * Used to show a temporarily message
 */
export function useConfirmationDialog(): [JSX.Element, (props: IDialogContentProps) => Promise<boolean>] {
    const [state, setState] = useState<IUseConfirmationState>({})

    const reset = () => setState({ props: null, onResponse: null })

    const dialog = (
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

    return [dialog, getResponse]
}

export const ConfirmDialog: React.FunctionComponent<IConfirmDialogProps> = ({ title, subText, onResponse }: IConfirmDialogProps) => {
    return (
        <Dialog
            hidden={!onResponse}
            dialogContentProps={{
                type: DialogType.largeHeader,
                title,
                subText
            }}>
            <DialogFooter>
                <PrimaryButton text='Ja' onClick={() => onResponse(true)} />
                <DefaultButton text='Avbryt' onClick={() => onResponse(false)} />
            </DialogFooter>
        </Dialog>
    )
}

export * from './types'