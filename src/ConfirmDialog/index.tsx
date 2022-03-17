import { DefaultButton, Dialog, DialogFooter, DialogType } from '@fluentui/react'
import React, { FunctionComponent } from 'react'
import { IConfirmDialogProps } from './types'

export const ConfirmDialog: FunctionComponent<IConfirmDialogProps> = (props: IConfirmDialogProps) => {
    return (
        <Dialog
            hidden={!props.onResponse}
            modalProps={{
                isBlocking: true,
                isDarkOverlay: false
            }}
            dialogContentProps={{
                type: DialogType.largeHeader,
                title: props.title,
                subText: props.subText
            }}>
            <DialogFooter>
                {props.responses.map(([text, value, primary], idx) => (
                    <DefaultButton
                        key={idx}
                        primary={primary}
                        text={text}
                        onClick={() => props.onResponse(value)} />
                ))}
            </DialogFooter>
        </Dialog>
    )
}

export * from './types'
export * from './useConfirmationDialog'

