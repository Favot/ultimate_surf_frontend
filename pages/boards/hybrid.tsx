import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { API_URL, fromImageToUrl } from "../../utils/urls";
import Link from 'next/link'
import HomeCard from '../../components/HomeCard'
import ArrowDown from '../../public/ArrowDown'

export default function Hybrid({ boards}) {
  console.log (boards);

  return (
    <>

    <div className={styles.container}>
      {boards.map((board)=> (
      <>
        <HomeCard board={board} />

        <ArrowDown/>
      </>
        ))}

    </div>
    </>
  )
}

export async function getStaticProps() {
  const product_res = await fetch(`${API_URL}/boards?type=hybrid`);
  const boards = await product_res.json();
  return {
    props: {
      boards,
    },
  };
}
