import { IUserMessageProps } from './types'
import React, { useState } from 'react'
import { UserMessage } from '.'

/**
 * Used to show a temporarily message
 * 
 * @param {number} defaultDuration Default duration
 * @param {IUserMessageProps} defaultProps Default props
 */
export function useMessage(defaultDuration = 5000, defaultProps: Partial<IUserMessageProps> = {}): [IUserMessageProps, (message: IUserMessageProps, duration?: number) => void] {
  const [state, setState] = useState<IUserMessageProps>(null)


  const element = state ? <UserMessage {...{ ...defaultProps, ...state }} /> : null

  /**
   * Set message
   *
   * @param {IUserMessageProps} message Message
   * @param {number} duration Duration in ms
   */
  function set(message: IUserMessageProps, duration = defaultDuration) {
    setState(message)
    window.setTimeout(() => setState(null), duration)
  }

  return [element, set]
}
