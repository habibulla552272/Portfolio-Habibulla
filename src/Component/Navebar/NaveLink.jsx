'use client'
import { Flag } from '@deemlol/next-icons'
import React, { useEffect, useState } from 'react'

export const BottomtoTop = () => {
  const [isvisible, setIsVisible] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }, [])
    
    return isvisible;
  })
 return isvisible
}



