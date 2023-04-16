import Link from "next/link";

import ThemeSwitch from "./ThemeSwitch";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <ThemeSwitch />
      <style jsx>
        {`
          ul {
            list-style-type: none;
            padding: 0;
          }

          li {
            display: inline;
          }

          li:not(:first-child) {
            margin-left: 0.75rem;
          }

          nav {
            display: flex;
            justify-content: space-between;
          }
        `}
      </style>
    </nav>
  );
}

export default NavBar;
