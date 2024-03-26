import { mergeProps } from '@zag-js/react'
import { type PanelProps } from '@zag-js/splitter'
import { forwardRef } from 'react'
import { createSplitProps } from '../create-split-props'
import { ark, type HTMLArkProps } from '../factory'
import type { Assign } from '../types'
import { useSplitterContext } from './use-splitter-context'

export interface SplitterPanelProps extends Assign<HTMLArkProps<'div'>, PanelProps> {}

export const SplitterPanel = forwardRef<HTMLDivElement, SplitterPanelProps>((props, ref) => {
  const [splitterPanelProps, divProps] = createSplitProps<PanelProps>()(props, ['id', 'snapSize'])
  const context = useSplitterContext()
  const mergedProps = mergeProps(context.getPanelProps(splitterPanelProps), divProps)

  return <ark.div {...mergedProps} ref={ref} />
})

SplitterPanel.displayName = 'SplitterPanel'
