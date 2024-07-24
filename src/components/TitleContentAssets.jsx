import * as React from "react";
import ButtonComponent from "./button";

export default function TitleContentAssets(props) {
  let {
    reverse,
    text,
    title,
    bgPrimary,
    image,
    button,
    button_link,
    id,
    className,
  } = props;
  return (
    <div
      id={id}
      className={`md:gap-10 gap-5 ${
        bgPrimary ? "bg-gradient-to-r from-primary to-gray-100" : ""
      }  flex flex-row justify-between md:p-16 p-8  rounded-lg ${className}`}
    >
      <div
        className={`w-1/2 ${
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
          <ButtonComponent
            width={175}
            text={button}
            link={"/choose-your-product"}
          />
        )}
      </div>
      <div className={`${reverse ? "order-1" : "order-2"}`}>
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
