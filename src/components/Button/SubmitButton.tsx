import React from "react";
import { toast } from "react-toastify";

type ComponentProps = {
  submit: () => Promise<boolean>; // Ensure it returns a promise that resolves to a boolean
  name: string;
  onSuccess: () => void; // Callback for success handling
};

const SubmitButton: React.FC<ComponentProps> = ({
  submit,
  name,
  onSuccess,
}) => {
  const handleClick = async () => {
    const isSuccess = await submit();
    if (isSuccess) {
      onSuccess();
    } else {
      toast.error("Failed to send message.");
    }
  };
  return (
    <div
      className="relative w-full text-center cursor-pointer"
      onClick={handleClick}
    >
      <div className="absolute left-0 top-0 w-3 h-3 bg-black rounded-br-full" />
      <div className="bg-white text-black rounded-tl-full px-6 py-2 text-customBlue text-xl">
        {name}
      </div>
    </div>
  );
};
export default SubmitButton;
