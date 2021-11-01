import axios from "axios";

export const getPosts = async function getServerSideProps() {
  const { data } = await axios.get(
    "https://dev.to/api/articles?username=mihrilp"
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  return data;
};
