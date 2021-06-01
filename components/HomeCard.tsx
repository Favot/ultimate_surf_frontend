import styles from '../styles/HomeCard.module.css'
import { API_URL, fromImageToUrl } from "../utils/urls";
import Link from 'next/link'


const HomeCard = ({board}) => {
  console.log(board)
  return(
    <div className={styles.board_card}>
          <div className={styles.model}>
            <h2> {board.model} </h2>
          </div>
          <div className={styles.short_description}>
            <h3> {board.short_description} </h3>
          </div>
          <img className={styles.image} src={fromImageToUrl(board.image)} alt=""/>

          <Link  href={`/boards/${board.id}`}>
            <button className={styles.link_show}>
              En savoir plus
            </button>
          </Link>
          <p>Plus de produit</p>

        </div>
    )
}

export default HomeCard
