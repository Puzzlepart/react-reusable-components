import { IDialogContentProps } from '@fluentui/react'

export interface IUseConfirmationState {
    props?: IDialogContentProps;
    onResponse?: (confirmed: boolean) => void;
}

export interface IConfirmDialogProps extends IDialogContentProps {
    onResponse: (confirmed: boolean) => void;
}