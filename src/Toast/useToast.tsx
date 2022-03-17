/* eslint-disable tsdoc/syntax */
import React, { useState } from 'react'
import { Toast } from './index'
import { IToastProps } from './types'

/**
 * Hook used to show a temporarily `<Toast />`
 *
 * @param defaultDuration - Default duration
 * @param defaultProps - Default props
 *
 * @category Toast
 */
export function useToast(
  defaultDuration = 5000,
  defaultProps: IToastProps = {}
) {
  const [state, setState] = useState<IToastProps>(null)
  const element = state && <Toast {...state} />


  /**
   * Set message
   *
   * @param message - Message
   * @param duration - Duration in ms (defaults to 5000)
   */
  function set(message: IToastProps | string, duration: number = defaultDuration) {
    let props = { ...defaultProps }
    if (typeof message !== 'string') props = { ...props, ...message }
    else props.text = message as string;
    setState(props)
    window.setTimeout(() => {
      setState(null)
    }, duration)
  }

  return [element, set] as const
}
