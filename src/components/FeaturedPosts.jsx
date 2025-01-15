import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";

const fetchPost = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/posts?featured=true&limit=4&sort=newest`
  );
  return res.data;
};

const FeaturedPosts = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["featuredPosts"],
    queryFn: () => fetchPost(),
  });

  if (isPending) return "loading...";
  if (error) return "Something went wrong!" + error.message;

  const posts = data.posts;
  if (!posts || posts.length === 0) {
    return "";
  }

  return (
    <>
      <h1 className="mt-4 text-2xl text-gray-600 underline">Featured Posts</h1>

      <div className="mt-4 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {posts[0].img && (
            <Image
              src={posts[0].img}
              className="rounded-3xl object-cover"
              w="895"
            />
          )}
          <div className="flex items-center gap-4">
            <h1 className="font-semibold lg:text-lg">01.</h1>
            <Link className="text-blue-800 lg:text-lg">
              {posts[0].category}
            </Link>
            <span className="text-gray-500">{format(posts[0].createdAt)}</span>
          </div>
          <Link
            to={`/${posts[0].slug}`}
            className="text-lg font-semibold lg:text-3xl lg:font-bold"
          >
            {posts[0].title}
          </Link>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {posts[1] && (
            <div className="lg:h-1/3 flex justify-between gap-4">
              {posts[1].img && (
                <div className="w-1/3 aspect-video">
                  <Image
                    src={posts[1].img}
                    className="rounded-3xl object-cover w-full h-full"
                    w="298"
                  />
                </div>
              )}
              <div className="w-2/3">
                <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                  <h1 className="font-semibold lg:text-lg">02.</h1>
                  <Link className="text-blue-800 lg:text-lg">
                    {posts[1].category}
                  </Link>
                  <span className="text-gray-500">
                    {format(posts[1].createdAt)}
                  </span>
                </div>
                <Link
                  to={`/${posts[1].slug}`}
                  className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
                >
                  {posts[1].title}
                </Link>
              </div>
            </div>
          )}
          {posts[2] && (
            <div className="lg:h-1/3 flex justify-between gap-4">
              {posts[2].img && (
                <div className="w-1/3 aspect-video">
                  <Image
                    src={posts[2].img}
                    className="rounded-3xl object-cover w-full h-full"
                    w="298"
                  />
                </div>
              )}
              <div className="w-2/3">
                <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                  <h1 className="font-semibold lg:text-lg">03.</h1>
                  <Link className="text-blue-800 lg:text-lg">
                    {posts[2].category}
                  </Link>
                  <span className="text-gray-500">
                    {format(posts[2].createdAt)}
                  </span>
                </div>
                <Link
                  to={`/${posts[2].slug}`}
                  className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
                >
                  {posts[2].title}{" "}
                </Link>
              </div>
            </div>
          )}
          {posts[3] && (
            <div className="lg:h-1/3 flex justify-between gap-4">
              {posts[3].img && (
                <div className="w-1/3 aspect-video">
                  <Image
                    src={posts[3].img}
                    className="rounded-3xl object-cover w-full h-full"
                    w="298"
                  />
                </div>
              )}
              <div className="w-2/3">
                <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                  <h1 className="font-semibold lg:text-lg">04.</h1>
                  <Link className="text-blue-800 lg:text-lg">
                    {posts[3].category}
                  </Link>
                  <span className="text-gray-500">
                    {" "}
                    {format(posts[3].createdAt)}
                  </span>
                </div>
                <Link
                  to={`/${posts[3].slug}`}
                  className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
                >
                  {posts[3].title}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FeaturedPosts;
