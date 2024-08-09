import { memo } from "react";

const Navbar = memo(() => {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <a href="/">홈</a>
        </li>
        <li>
            <a href = "/family">가족</a>
        </li>
        <li>
            <a href = "/board">방명록</a>
        </li>
        <li>
          <a href="https://github.com/freebird920/bongcoder-example-01" target="none">깃허브</a>
        </li>
      </ul>
    </nav>
  );
});
Navbar.displayName = "Navbar";
export default Navbar;