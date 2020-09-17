import React, { useState } from "react";
import Joi from "@hapi/joi";
import { addPost } from "../../services/postService";
import InputBox from "../../components/InputBox";
import TextareaInput from "../../components/TextareaInput";
import Button from "../../components/Button";
import styles from "./NewPost.module.css";

const NewPost = ({ history }) => {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");

  const handleStoryChange = ({ currentTarget: input }) => {
    setStory(input.value);
  };
  const handleTitleChange = ({ currentTarget: input }) => {
    setTitle(input.value);
  };

  const schema = Joi.object({
    title: Joi.string().required().min(4),
    story: Joi.string().required().min(20),
    date: Joi.optional(),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = {
      title: title,
      story: story,
      date: null,
    };

    const { error } = schema.validate(post);
    if (error) {
      console.error(error.details[0].message);
      return;
    }

    const { data } = await addPost(post);
    history.push(`/${data._id}`);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <InputBox
          type="text"
          value={title}
          placeholder="Title..."
          handleChange={handleTitleChange}
          height={"8%"}
          width={"100%"}
          fontSize={"28px"}
          padding={"20px"}
        />
        <TextareaInput
          value={story}
          placeholder="Tell us your story..."
          handleChange={handleStoryChange}
          width={"100%"}
          height={"60%"}
          padding={"20px"}
          fontSize={"18px"}
        />
        <Button
          value={"Submit"}
          onClick={handleSubmit}
          height={"8%"}
          width={"100%"}
          bgColor={"var(--black)"}
          outline={"none"}
          color={"#ffffff"}
          fontSize={"18px"}
        />
        {/* <button className={styles.submit} onClick={handleSubmit}>
          Post!
        </button>{" "} */}
      </form>
    </div>
  );
};

export default NewPost;
