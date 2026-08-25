import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'span'
  direction?: 'up' | 'left' | 'right' | 'scale'
}

const hidden: Record<string, string> = {
  up: 'opacity-0 translate-y-10',
  left: 'opacity-0 -translate-x-8',
  right: 'opacity-0 translate-x-8',
  scale: 'opacity-0 scale-95',
}

export default function Reveal({ children, delay = 0, className = '', as = 'div', direction = 'up' }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const Tag = as

  return (
    <Tag
      ref={ref as never}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0 translate-x-0 scale-100' : hidden[direction]} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
