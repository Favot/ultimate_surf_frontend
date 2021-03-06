import { useContext } from 'react'
import NavbarButton from '../public/NavbarButton'
import CrossSvg from '../public/CrossSvg'
import {useState, useCallback} from 'react'
import Link from 'next/link'
import AuthContext from "../context/AuthContext"

import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  const { user } = useContext(AuthContext)

  const [isOpen, setIsOpen] = useState(false)
  const toggleState = useCallback (
  () => {
    return isOpen ? setIsOpen(false) : setIsOpen(true);
  },
  [isOpen],
)



  return(
    <>
      <div className={styles.Navbar}>
        <h1 className={styles.main_title}>
          UltimateSurf2000
        </h1>

        <div onClick={toggleState}>
          {
            isOpen ? <CrossSvg/> : <NavbarButton/>
          }
        </div>
      </div>
          {
            isOpen ? (
              <div className={styles.menu} >

                  <Link  href={`/`}><a>All boards</a></Link>
                  <Link  href={`/boards/hybrid`}><a>Hybrid boards</a></Link>
                  <Link  href={`/boards/shortboard`}><a>Shortboard</a></Link>
                  <Link  href={`/boards/softboard`}><a>Softboard</a></Link>
                  <Link  href={`/boards/longboard`}><a>Longboard</a></Link>

                  <div className={styles.auth}>
                    {user ? (
                      <Link href="/account">
                        <a>{user.mail}</a>
                      </Link>
                      ) : (
                      <Link  href="/login">
                        <a>Log in</a>
                      </Link>
                      )}
                  </div>

              </div>) : null
          }



    </>
    )
}



export default Navbar
