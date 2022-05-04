import { getAllPostIds,getPostData  } from '../../lib/posts';


export default function Post({ postData }) {
    return (
      <>
        {postData.id}
        <br />
        <div dangerouslySetInnerHTML={{__html:postData.contentHtml}}></div>
      </>
    );
  }

  export async function getStaticPaths() {
    const paths = getAllPostIds();
    console.log(paths);
    return {
      paths,
      fallback: false,
    };
  }
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
      props: {
        postData,
      },
    };
  }