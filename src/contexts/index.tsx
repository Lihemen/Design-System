import AuthContextProvider from './auth';

// Export the individual context provider and the usecontext provider
export { useAuthCtx, default as AuthContextProvider } from './auth';

// A context wrapper to combine multiple contexts, into a single context, sort of like a combineReducer
const ContextManger = ({ children }: ContextManger) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default ContextManger;
