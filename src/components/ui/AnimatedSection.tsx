import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right'

interface Props {
  children: ReactNode
  delay?: number
  direction?: Direction
  className?: string
}

const offsets: Record<Direction, { x: number; y: number }> = {
  up:    { x: 0,   y: 30  },
  down:  { x: 0,   y: -30 },
  left:  { x: -40, y: 0   },
  right: { x: 40,  y: 0   },
}

export default function AnimatedSection({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: Props) {
  const offset = offsets[direction]

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
