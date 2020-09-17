import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPostById } from "../../services/postService";
import TextComponent from "../../components/TextComponent";
import styles from "./PostById.module.css";

const PostById = ({ match }) => {
  const [post, setPost] = useState();
  const [isLoading, toggleLoading] = useState(true);

  const fetchData = async (id) => {
    const { data } = await getPostById(id);
    setPost(data);
    toggleLoading(false);
    return;
  };

  useEffect(() => {
    fetchData(match.params.id);
    return;
  }, [match.params.id]);

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <TextComponent
              content={post.title}
              fontSize={"38px"}
              fontFamily={"Hind Siliguri"}
              color={"var(--black)"}
            />
            <TextComponent content={post.date} fontSize={"20px"} />
          </div>
          <TextComponent content={post.story} fontSize={"22px"} />
          <Link to="/">
            <h3 className={styles.goBack}>Back to home</h3>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PostById;
