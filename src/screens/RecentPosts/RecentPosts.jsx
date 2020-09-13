import React, { useState, useEffect } from "react";
import styles from "./RecentPosts.module.css";
import { Link } from "react-router-dom";
import { getPosts } from "../../services/postService";
import PostCard from "../../components/PostCard/PostCard";
import PostImage from "../../assets/pictures/postCover.jpg";

const RecentPosts = () => {
  const [isLoading, toggleLoading] = useState(true);
  const [data, setData] = useState();

  const fetchData = async () => {
    toggleLoading(true);
    const { data } = await getPosts();
    setData(data);
    toggleLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1 className={styles.title}>Recent posts:</h1>
          <div className={styles.grid}>
            {data.map(({ title, date, _id }) => (
              <PostCard
                title={title}
                date={date}
                path={_id}
                height={"100%"}
                width={"100%"}
                flex={["column", "center", "space-between"]}
                borderRadius={"40px"}
                borderColor={"#ffffff"}
                borderSize={"2px"}
                image={PostImage}
                boxShadow={"32px 32px 64px #d0d0d0, -32px -32px 64px #ffffff"}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RecentPosts;
