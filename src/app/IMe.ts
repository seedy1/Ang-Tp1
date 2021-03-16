import { Auth$LoginParams } from '@backend/routes/auth/post.login.interfaces';
import User from '@backend/models/user';

interface IMe {
  me: User

  /**
   * On first call, retrieve the current user identity on /api/users/me.
   * On following calls, use a cached reference (this.me).
   * Returns Promise<User> if logged.
   * Returns Promise<null> otherwise.
   */
  resolve: () => Promise<User | null>

  /**
   * Sends credentials against /auth/login.
   * Throws HttpErrorResponse in case of failure.
   * Returns Promise<void> if success.
   */
  login: (credentials: Auth$LoginParams) => Promise<void>

  /**
   * Sends credentials against /auth/logout.
   * Throws HttpErrorResponse in case of failure.
   * Returns Promise<void> if success.
   */
  logout: () => Promise<void>
}