import { FC, useEffect, useRef, useState } from "react";
import placeholder from "../../assets/placeholder.png";

interface ILazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage: FC<ILazyImageProps> = (props) => {
  const [inView, setInView] = useState(false);
  const fakeImageRef = useRef<HTMLImageElement>(null);

  const imgStyle = inView ? {} : { display: "none" };
  const placeholderStyle = inView ? { display: "none" } : {};

  useEffect(() => {
    return () => {
      setInView(false);
    };
  }, [props.src, setInView]);

  return (
    <>
      <img
        {...props}
        alt={props.alt || ""}
        style={imgStyle}
        onLoad={() => setInView(true)}
      />
      <img
        {...props}
        style={placeholderStyle}
        src={placeholder}
        alt={props.alt}
        ref={fakeImageRef}
      />
    </>
  );
};

export default LazyImage;
