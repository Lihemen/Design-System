// Type declaration

interface UnauthenticatedUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

// Extending a user
interface User extends UnauthenticatedUser {
  token: string;
  last_logged_in: string | Date;
  authenticated: boolean;
}

type ContextManger = {
  children: React.ReactNode;
};
