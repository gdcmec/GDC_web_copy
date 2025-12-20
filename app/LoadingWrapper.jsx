'use client'

import { useState, useEffect } from 'react'
import { Responsivehook1 } from '@/components/ResponsiveHook'

export default function LoadingWrapper({ children }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 7000)

        return () => clearTimeout(timer)
    }, [])

    if (loading) {
        return <Responsivehook1 />
    }

    return <>{children}</>
}
