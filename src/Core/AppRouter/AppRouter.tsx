import React, { FC, useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import { NotFoundPage } from '../../Pages/Errors/NotFoundPage/NotFoundPage'
import { LoginPage } from '../../Pages/LoginPage/LoginPage'
import { PostsPage } from '../../Pages/PostsPage/PostsPage'
import { useRootStore } from '../RootStore/RootStoreContext'
import { ROUTES } from './consts'
import { ProtectedRoute } from './ProtectedRoute'

export const AppRouter: FC = (_props) => {
  const root = useRootStore()
  const navigate = useNavigate()

  const authenticated = root.auth.authenticated

  useEffect(() => {
    root.setNavigate(navigate)
  }, [navigate, root])

  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.LOGIN.PATH} replace />} />
      <Route
        path={ROUTES.LOGIN.PATH}
        element={
          <ProtectedRoute valid={!authenticated} redirect={ROUTES.POSTS.PATH}>
            <LoginPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.POSTS.PATH}
        element={
          <ProtectedRoute valid={authenticated} redirect={ROUTES.LOGIN.PATH}>
            <PostsPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
