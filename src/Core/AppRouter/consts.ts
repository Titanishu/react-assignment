export const ROUTES = {
  PATH: '/',
  LOGIN: {
    PATH: '/login',
  },
  POSTS: {
    PATH: '/posts/*',
    POST: {
      PATH: (post: number) => `/posts/${post}`,
    },
  },
}
