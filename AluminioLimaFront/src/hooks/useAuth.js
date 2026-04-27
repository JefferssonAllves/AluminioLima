export function useAuth() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const isAuthenticated = () => {
    return !!localStorage.getItem("token");
  };

  return { logout, isAuthenticated };
}