import { NavLink } from "react-router-dom";
import { Icons } from "../../utility";
import { Container } from "../Container";

export const Breadcrumb = ({ NavLinkContent }) => {
  return (
    <section>
      <Container>
        <nav aria-label="Breadcrumb" className="mb-11">
          <ol className="flex items-center gap-1 text-sm text-gray-600">
            <li>
              <NavLink to="/" className="block transition hover:text-gray-700">
                Home
              </NavLink>
            </li>
            <li className="rotate-360">{Icons.arrowIcon}</li>
            <li>
              <NavLink
                className="block capitalize transition
             hover:text-gray-700 pointer-events-none text-gray-75"
              >
                {NavLinkContent}
              </NavLink>
            </li>
          </ol>
        </nav>
      </Container>
    </section>
  );
};
