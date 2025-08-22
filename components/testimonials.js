import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/avatar.png";
import userTwoImg from "../public/img/avatar.png";
import userThreeImg from "../public/img/avatar.png";

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Brilliant job! The lads came right on time and had my big telly
              mounted just where I wanted it. It’s sturdy as can be, and they
              even sorted out the cables so it looks tidy as ever. Friendly,
              fast, and nae hassle at all!
            </p>

            <Avatar image={userOneImg} name="Alex" title="Newcastle" />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Couldn’t be happier! Was a bit worried about putting a big telly
              on our old walls, but the TyneWear TV Mounting team knew their
              stuff. They got it up safe and sound, and it looks pure magic.
              Worth every penny, nae doubt!
            </p>

            <Avatar image={userTwoImg} name="Tom" title="Peterlee" />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Absolutely chuffed with the work they did! Had two TVs mounted,
              and both are spot on. The lads helped pick the best spots and made
              sure they were fixed up good and proper. Left the place spotless
              too—top-notch service!
            </p>

            <Avatar image={userThreeImg} name="Linda" title="Durham" />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
