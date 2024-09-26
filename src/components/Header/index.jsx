import coverImage from '../../assets/cover/pexels.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Leonid Shapirov portfolio</h1>
      <img src={coverImage} alt="pexels"></img>
      {props.children}
    </header>
  );
}

export default Header;
