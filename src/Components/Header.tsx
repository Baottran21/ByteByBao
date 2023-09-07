import { Link } from "react-scroll";

const NavLinks = [
  { id: 1, link: "landing-page-container", title: "Home" },
  { id: 2, link: "about-container", title: "About" },
  { id: 2, link: "portfolio-container", title: "Portfolio" },
  { id: 2, link: "contact-container", title: "Contact" },
];

export default function Header() {
  return (
    <>
      <header className="w-full flex justify-between items-center h-[10vh] bg-[#eee] pl-[5vh] pr-[15vh] sticky top-0 shadow-lg">
        <Link to={NavLinks[0].link} smooth={true} offset={-100} duration={500}>
          <h1 className="cursor-pointer">ByteByBao.Dev</h1>
        </Link>
        <ul className=" w-[20vw] flex justify-between">
          {NavLinks.map((elem, index) => (
            <li key={index} className="cursor-pointer">
              <Link to={elem.link} smooth={true} offset={-100} duration={500}>
                {elem.title}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
}
