import { DefaultButton, PrimaryButton } from '@fluentui/react'
import { Dialog, DialogFooter, DialogType } from '@fluentui/react'
import React, { FunctionComponent } from 'react'
import { IConfirmDialogProps } from './types'

export const ConfirmDialog: FunctionComponent<IConfirmDialogProps> = ({ title, subText, onResponse }: IConfirmDialogProps) => {
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
export * from './useConfirmationDialog'