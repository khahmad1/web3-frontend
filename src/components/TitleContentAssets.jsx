import * as React from "react";

export default function TitleContentAssets(props) {
  let { reverse, text, title, bgPrimary, image, button, id , className} = props;
  return (
    <div
      id={id}
      className={`md:gap-10 gap-5 ${
        bgPrimary ? "bg-gradient-to-r from-primary to-gray-100" : ""
      }  grid md:grid-cols-2 grid-cols-1 md:p-16 p-8  rounded-lg ${className}`}
    >
      <div
        className={`col-span-1 ${
          reverse ? "order-2" : "order-1"
        } flex flex-col self-center md:gap-10 gap-5`}
      >
        <p
          className={`md:text-5xl text-3xl font-bold ${
            bgPrimary ? "text-white" : " text-primary"
          }`}
        >
          {title}
        </p>
        <p className={`md:text-2xl  text-xl text-justify`}>{text}</p>
        {button && (
          <button
            className={` w-44 ${
              !bgPrimary ? "bg-primary" : "bg-secondary"
            } text-white md:text-2xl text-xl rounded-3xl font-semibold px-4 py-2 `}
          >
            {button}{" "}
          </button>
        )}
      </div>
      <div className={`col-span-1 ${reverse ? "order-1" : "order-2"}`}>
        <img
          className="object-cover rounded-md"
          width={600}
          height={600}
          src={image}
          alt="image"
        />
      </div>
    </div>
  );
}
