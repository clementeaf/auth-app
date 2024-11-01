import { useAuthStore } from '../store/useAuthStore';
import UnAuthorized from '../pages/UnAuthorized';
import SignInAlert from '../pages/SIgnInAlert';

const ProtectedRoute = ({ component: Component }: { component: any }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const userName = useAuthStore((state) => state.userName);

  console.log('Username: ', userName);

  // Si no está autenticado, redirigimos a SignInAlert
  if (!isAuthenticated) {
    return <SignInAlert />;
  }

  // Si el usuario es "clemente", mostramos el componente UnAuthorized
  if (userName === "clemente") {
    return <UnAuthorized />;
  }

  // Si está autenticado y autorizado, renderizamos el componente protegido
  return <Component />;
};

export default ProtectedRoute;
