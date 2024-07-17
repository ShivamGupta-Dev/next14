"use client"
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "./MagicButton";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
const EmailCopy = () => {
    const [copied, setCopied] = useState(false);

    const defaultOptions = {
      loop: copied,
      autoplay: copied,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    const handleCopy = () => {
        const text = "thegreatshivam@gmail.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
      };
    return (
        <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
    );
}

export default EmailCopy;
