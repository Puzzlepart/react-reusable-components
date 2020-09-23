import { IUserMessageProps } from './IUserMessageProps'
import React,{useState} from 'react'

/**
 * Used to show a temporarily message
 * 
 * @param {number} defaultDuration Default duration
 */
export function useMessage(defaultDuration = 5000): [IUserMessageProps, (message: IUserMessageProps, duration?: number) => void] {
  const [state, setState] = useState<IUserMessageProps>(null)

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

  return [state, set]
}
