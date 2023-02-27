import useNavigationContext from '../hooks/use-navigation-context';

function Link({ to, children }) {
  const { navigate } = useNavigationContext();
  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };

  return (
    <a
      className="text-center text-lg font-bold text-blue-300 hover:text-blue-600"
      onClick={handleClick}
      href={to}
    >
      {children}
    </a>
  );
}

export default Link;
