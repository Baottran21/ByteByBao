import { Link } from "react-scroll";

const NavLinks = [
  { id: 1, link: "landing-page-container", title: "Home" },
  { id: 2, link: "about-container", title: "About" },
];

export default function Header() {
  return (
    <>
      <header className="w-full flex justify-between items-center h-[10vh] bg-[#eee] pl-[5vh] pr-[15vh] sticky top-0 shadow-lg">
        ByteByBao.Dev
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
