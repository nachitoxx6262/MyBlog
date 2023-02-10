import Style from "../../styles/learningzone.module.css"
import Layout from "../../components/layout";
import {addPost} from "../../redux/store"
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
export default function LearningZone() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.publicaciones.post);
  console.log(data)
  useEffect(() => {
    dispatch(addPost())

  }, [dispatch]);
  return (
    <>
      <Head>
        <title>Learning Zone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>Learning Zone</h1>
        {data?.map((element)=>{return (
          <>
        <h2 className={Style.titlepost}>{element.title}</h2>
        <p dangerouslySetInnerHTML={{__html: element.description}} />
          </>
        )})}
      </Layout>
    </>
  );
}
