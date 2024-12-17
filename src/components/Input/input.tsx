import { error } from "console";
import React from "react";

type input = {
  value: string;
  set: (str: string) => void;
};

type error = {
  value: boolean;
  set: (bol: boolean) => void;
};

type pageProps = {
  input: input;
  name: string;
  placeholder: string;
  error: error;
  disable: boolean;
  inputLength: number;
  maxInputLength: number;
  type?: string;
};

const Input = (props: pageProps) => {
  const onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    // const newValue = value.replace(/\D/g, "");
    // const truncatedValue = newValue.substring(0, props.maxInputLength);
    const truncatedValue = value.substring(0, props.maxInputLength);
    props.input.set(truncatedValue);
  };
  const onBlur = () => {
    if (props.input.value.length < props.inputLength) props.error.set(true);
    else props.error.set(false);
  };
  return (
    <div className="space-y-2">
      <div
        className={`font-bold ${
          props.error.value ? "text-red-500 animate-shake" : "text-white"
        }`}
      >
        {props.name}
      </div>
      <input
        className={` bg-opacity-50 contrast-200 focus:bg-buttonFirstColor  border-2  focus:placeholder:text-white/95 focus:text-white  px-3 py-2  shadow-2xl rounded-xl w-full outline-white ${
          props.error.value
            ? "bg-red-500 text-white placeholder:text-white/95 animate-shake"
            : "text-white placeholder:text-buttonFirstColor/95 bg-purple-950/10 focus:border-white"
        } transition-all duration-700 ease-in-out`}
        type={props.type || "string"}
        placeholder={props.placeholder}
        value={props.input.value}
        disabled={props.disable}
        onChange={(e) => {
          onchange(e);
        }}
        onBlur={() => {
          onBlur();
        }}
      />
    </div>
  );
};

export default Input;
