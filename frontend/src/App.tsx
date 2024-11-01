import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Stack } from "@mui/material";
import routes from './routes/routesConfig';
import ProtectedRoute from './routes/ProtectedRoute';
import Login from './pages/Login';

export default function App() {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.id}
              path={route.path}
              element={
                route.isProtected ? (
                  <ProtectedRoute
                    component={route.component}
                  />
                ) : (
                  <route.component />
                )
              }
            />
          ))}

          {/* Ruta para login */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Stack>
  );
}