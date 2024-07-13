const SignOut = () => {
  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  };
  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOut;
