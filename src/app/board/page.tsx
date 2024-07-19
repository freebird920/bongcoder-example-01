"use client";

import { FormEvent, useCallback, useState } from "react";
type PostType = {
  name: string;
  text: string;
  date: string;
};
export default function BoardPage() {
  const [postList, setPostList] = useState<PostType[]>([]);
  const onSubmitHandler = useCallback((event: FormEvent) => {
    event.preventDefault();
    const formElement = event.currentTarget as HTMLFormElement;
    const formData = new FormData(formElement);
    const userName = formData.get("name");
    const inputText = formData.get("inputText");
    const postDate = formData.get("date");
    console.log(userName);
    if (
      !userName ||
      !inputText ||
      typeof userName !== "string" ||
      typeof inputText !== "string" ||
      typeof postDate !== "string"
    ) {
      return alert("이름이나 내용 없음.");
    }
    const result: PostType = {
      name: userName,
      text: inputText,
      date: postDate,
    };
    // Create a new array with the new post
    setPostList((prevPostList) => [...prevPostList, result]);
    formElement.reset();
  }, []);

  return (
    <>
      <h1>방명록</h1>
      <form
        className="border-2 p-2 rounded-md flex-col"
        onSubmit={onSubmitHandler}
      >
        <section>
          <label htmlFor="name">이름</label>
          <input id="name" name="name" />
        </section>
        <section>
          <label htmlFor="date">날짜</label>
          <input
            id="date"
            name="date"
            readOnly={true}
            defaultValue={new Date().toLocaleString("ko-KR")}
          />
        </section>
        <section>
          <label htmlFor="inputText">내용</label>
          <textarea id="inputText" name="inputText" />
        </section>
        <button type="submit">등록</button>
      </form>
      {postList.length > 0 &&
        postList
          .map((post: PostType, index: number) => {
            return (
              <section key={index}>
                <p>{index + 1}</p>
                <p>이름: {post.name}</p>
                <p>날짜: {post.date}</p>
                <p>내용: {post.text}</p>
              </section>
            );
          })
          .reverse()}
    </>
  );
}
