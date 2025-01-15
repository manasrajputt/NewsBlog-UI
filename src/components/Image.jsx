import React from "react";
import { IKImage } from "imagekitio-react";

const Image = ({ src, className, w, h, alt }) => {
  const isFullUrl = src.startsWith("http") || src.startsWith("https");

  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IG_URL_ENDPOINT}
      path={isFullUrl ? undefined : src}
      src={isFullUrl ? src : undefined} // Use `src` directly if it's a full URL
      className={className}
      alt={alt}
      width={w}
      height={h}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
    />
  );
};

export default Image;
