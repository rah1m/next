import headerStyles from "../styles/Header.module.scss";
const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Webdev</span> News
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with teh latest webdev news
      </p>
    </div>
  );
};

export default Header;
