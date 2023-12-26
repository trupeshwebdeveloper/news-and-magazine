import { NavLink } from "react-router-dom";
import { Icons } from "../../utility";

export const Breadcrumb = () => {
  return (
    <nav aria-label="Breadcrumb" className="mb-11">
      <ol className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
        <li>
          <NavLink to="/" className="block transition hover:text-gray-700 dark:hover:text-gray-200">
            Home
          </NavLink>
        </li>
        <li className="rtl:rotate-180">
          {Icons.arrowIcon}
        </li>
      </ol>
    </nav >
  )
}
