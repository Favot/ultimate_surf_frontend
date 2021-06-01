import styles from '../styles/Navbar.module.css'
import NavbarButton from '../public/NavbarButton'
import CrossSvg from '../public/CrossSvg'
import {useState, useCallback} from 'react'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const toggleState = useCallback (
  () => {
    return isOpen ? setIsOpen(false) : setIsOpen(true);
  },
  [isOpen],
)



  return(<>
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
          isOpen ? (<div>test</div>) : null
        }
        </>
    )
}

export default Navbar
