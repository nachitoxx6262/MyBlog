import Layout from "../../components/layout";
import {addCount} from "../../redux/action"
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
export default function LearningZone() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.post);
  console.log(data);
  useEffect(() => {
    dispatch(addCount)
  }, [data]);
  return (
    <>
      <Head>
        <title>Learning Zone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>Learning Zone</h1>
      </Layout>
    </>
  );
}
