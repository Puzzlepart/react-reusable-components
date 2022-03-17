import { IDialogContentProps } from '@fluentui/react'

export type ConfirmDialogResponseValue = boolean | string

export type ConfirmDialogResponse = [string, ConfirmDialogResponseValue?, boolean?]

export interface IUseConfirmationState {
    /**
     * 
     */
    props?: IConfirmDialogProps;

    /**
     * On response callback is called when the user clicks one of the 
     * of the possible responses in the dialog.
     */
    onResponse?: (responseValue: ConfirmDialogResponseValue) => void;
}

export interface IConfirmDialogProps extends IDialogContentProps {
    /**
     * On response callback is called when the user clicks one of the 
     * of the possible responses in the dialog.
     */
    onResponse?: (responseValue: ConfirmDialogResponseValue) => void;

    /**
     * Array of possible responses. Array of up to three properties.
     * 
     * 1. The button text (string)
     * 2. The returned value (boolean or string)
     * 3. Render button as primary (boolean)
     */
    responses: ConfirmDialogResponse[];
}