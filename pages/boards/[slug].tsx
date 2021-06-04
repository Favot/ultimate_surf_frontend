import Head from 'next/head'
import styles from '../../styles/BoardCard.module.css'

// import BuyButton from '../../components/BuyButton'

import { fromImageToUrl, API_URL } from '../../utils/urls'
// import { twoDecimals } from '../../utils/format'

const Board = ({board}) => {
  return (
    <div>

        <Head>
            {board.meta_title &&
                <title>{board.meta_title}</title>
            }
            {board.meta_description &&
                <meta name="description"
                content={board.meta_description}
                />
            }

        </Head>
          <div className={styles.board_pic}>
            <img src={fromImageToUrl(board.image)} />
          </div>
          <div className={styles.board_info}>
            <h2>{board.type}</h2>
            <h1>{board.model}</h1>
              {/*<BuyButton board={board} />*/}
            <h1>{board.price} €</h1>
          </div>
          <div className={styles.board_description}>
            <p>{board.description}</p>
          </div>
    </div>
  )
}

export async function getStaticProps({params: {slug}}) {
  const product_res = await fetch(`${API_URL}/boards/?slug=${slug}`)
  const found = await product_res.json()

  return {
    props: {
        board: found[0]
    }
  }
}

export async function getStaticPaths() {
    // Get external data from the file system, API, DB, etc.
    const products_res = await fetch(`${API_URL}/boards`)
    const boards = await products_res.json()
    return {
        paths: boards.map(el => ({
            params: {slug: String(el.slug)}
        })),
        fallback: false
    };
}

export default Board
