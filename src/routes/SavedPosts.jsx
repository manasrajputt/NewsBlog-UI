import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import PostListItem from "../components/PostListItem";

const SavedPosts = () => {
  const { getToken } = useAuth();

  const fetchPost = async () => {
    const token = await getToken();
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/users/saved`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["savedPosts"],
    queryFn: () => fetchPost(),
  });

  if (isPending) return "loading...";
  if (error) return "Something went wrong!" + error.message;

  if (data.length === 0) {
    return "No Posts Avaliable!";
  }
    return (
      <div className="">
        <h1 className="mb-8 text-2xl">Saved News Posts</h1>
        <div className="flex flex-col-reverse gap-8 md:flex-row justify-between">
          {data.map((post) => (
            <PostListItem key={post._id} post={post} />
          ))}
        </div>
      </div>
    );
};

export default SavedPosts;
