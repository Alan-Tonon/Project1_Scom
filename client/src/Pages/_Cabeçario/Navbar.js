import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Song from "./Song";
export default function Navbar() {
  return (
    <>
    
    
    <nav className="nav">
      <Link to="/login" className="site-title">
        League of Unespianos
      </Link>
      <ul>
        <CustomLink to="/originalweb">Site Original</CustomLink>
        <CustomLink to="/mapa">Mapa</CustomLink>
        <CustomLink to="/cuidado">Cuidado</CustomLink>
        <CustomLink to="/campeoes">Campeões</CustomLink>
        <CustomLink to="/email">Email</CustomLink>
      </ul>
    </nav>

    <Song/>
    </>

  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}