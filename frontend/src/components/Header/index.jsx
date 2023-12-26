import { NavLink } from "react-router-dom"
import { Container } from "../"
import { Icons } from "../../utility"
// import { Categories } from "./Categories"

export const HeaderLink = [
  {
    key: 1,
    title: 'Categories',
    // children: <Categories className='group-hover:visible group-hover:opacity-100' />,
    link: '#',
  },
  {
    key: 2,
    title: 'Pages',
    // children:,
    link: '#',
  },
  {
    key: 3,
    title: 'contact us',
    link: 'contactus',
  },
  {
    key: 4,
    title: 'about us',
    link: 'aboutus',
  },
]

export const Header = () => {
  return (
    <header className="py-11">
      <Container>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex gap-16 items-center justify-start">
            <NavLink to='/' className={'text-secondary h3 font-semibold'}>MEGA.news</NavLink >
            <ul className="flex gap-8">
              {HeaderLink.map((content, index) => (
                <li className="relative group" key={index}>
                  <NavLink to={content.link} className="relative capitalize flex items-center group-hover:text-primary before:ease-in-out before:transition-[width] before:absolute before:top-full before:w-0 hover:before:w-3 before:h-[4px] before:bg-primary before:rounded-xl">
                    {content.title}
                    {content.children && <span className="rotate-90">{Icons.arrowIcon}</span>}
                  </NavLink>
                  {content.children}
                </li>
              ))}
            </ul>
          </div>
          <div className="justify-self-end">5</div>
        </div>
      </Container>
    </header >
  )
}
