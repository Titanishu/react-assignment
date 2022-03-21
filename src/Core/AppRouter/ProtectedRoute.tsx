import React, { FC, ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

interface Props {
  valid: boolean
  redirect: string
  children: ReactNode
}

/**
 * Protected route.
 * Redirect to @redirect if valid is falsy.
 */
export const ProtectedRoute: FC<Props> = (props) => {
  const { valid, redirect, children } = props
  const from = useLocation()

  if (!valid) {
    return <Navigate to={redirect} state={{ from }} replace />
  }

  return <>{children}</>
}
