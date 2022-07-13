function Header({ darkMode, setDarkmode }) {
  const switchDarkMode = () => {
    setDarkmode(!darkMode);
  };

  return (
    <header
      className="bg-lightBackground flex justify-between 
      p-10 drop-shadow-lg items-center"
    >
      <h1
        className="text-3xl font-extrabold text-lightText 
      font-Nunito ml-3"
      >
        Where in the world ?
      </h1>
      <div
        className="mr-3 cursor-pointer flex items-center"
        onClick={switchDarkMode}
      >
        {darkMode ? (
          <span className="material-symbols-outlined mr-3">dark_mode</span>
        ) : (
          <span className="material-symbols-outlined mr-3">dark_mode</span>
        )}

        <h3 className="font-Nunito font-semibold text-xl">Dark Mode</h3>
      </div>
    </header>
  );
}

export default Header;
