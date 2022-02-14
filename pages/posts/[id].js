import Layout from '../../components/layout'
import { getAllPostIds } from '../../lib/posts'
import { getPostDataById } from '../../lib/posts'

export async function getStaticProps({params}) {
  const postData = getPostDataById(params.id)

  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()

  return{
    paths, 
    fallback: false
  }
}

export default function Post() {
  return <Layout>...</Layout>
}