'use client'

import { useEffect, useState } from 'react'
import { useThemeStore } from '@/store/theme'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { isDark, setTheme } = useThemeStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // 手动触发 Zustand 的 hydration
    useThemeStore.persist.rehydrate()
    
    // 检测系统主题偏好
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const savedTheme = localStorage.getItem('theme-storage')
    
    if (!savedTheme) {
      // 如果没有保存的主题，使用系统偏好
      setTheme(mediaQuery.matches)
    }
  }, [setTheme])

  useEffect(() => {
    if (!mounted) return
    
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(isDark ? 'dark' : 'light')
  }, [isDark, mounted])

  // 防止 hydration 不匹配，在客户端挂载前不渲染主题相关内容
  if (!mounted) {
    return <>{children}</>
  }

  return <>{children}</>
}
