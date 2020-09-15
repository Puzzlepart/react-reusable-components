import { IDialogContentProps } from 'office-ui-fabric-react/lib/Dialog'

export interface IUseConfirmationState {
    props?: IDialogContentProps;
    onResponse?: (confirmed: boolean) => void;
}

export interface IConfirmDialogProps extends IDialogContentProps {
    onResponse: (confirmed: boolean) => void;
}