
import { IMessageBarStyleProps, IMessageBarStyles, MessageBar } from 'office-ui-fabric-react/lib/MessageBar'
import { IStyleFunctionOrObject } from 'office-ui-fabric-react/lib/Utilities'
import React, { FunctionComponent } from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import { IUserMessageProps } from './types'

/**
 * A component that supports a MessageBar with markdown using react-markdown
 * 
 * @category UserMessage
 */
export const UserMessage: FunctionComponent<IUserMessageProps> = (props: IUserMessageProps) => {
    const _styles: IStyleFunctionOrObject<IMessageBarStyleProps, IMessageBarStyles> = {}

    if (props.fixedCenter) {
        _styles.root = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: props.fixedCenter,
        }
    }

    return (
        <div
            id={props.id}
            className={props.className}
            style={props.containerStyle}
            hidden={props.hidden}
            onClick={props.onClick}>
            <MessageBar
                styles={_styles}
                isMultiline={props.isMultiline}
                messageBarType={props.type}
                onDismiss={props.onDismiss}
                actions={props.actions}>
                {props.text && (
                    <ReactMarkdown source={props.text} escapeHtml={false} skipHtml={false} />
                )}
                {props.children && props.children}
            </MessageBar>
        </div>
    )
}

export * from './types'
export * from './useMessage'

