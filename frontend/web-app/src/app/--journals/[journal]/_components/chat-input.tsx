import { Button } from "@/components/ui/button";
import { RiAttachment2, RiLeafLine, RiMicLine } from "@remixicon/react";

export default function ChatInput() {
  return (
    <>
      <div className="sticky bottom-0 pt-4 md:pt-8 z-9999 w-full ">
        <div className="max-w-3xl mx-auto bg-background rounded-[20px] pb-4 md:pb-8">
          <div className="relative rounded-[20px] border border-transparent bg-muted transition-colors focus-within:bg-muted/50 focus-within:border-input has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 [&:has(input:is(:disabled))_*]:pointer-events-none">
            <textarea
              className="flex sm:min-h-[84px] w-full bg-transparent px-4 py-3 text-[15px] leading-relaxed text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none [resize:none]"
              placeholder="Ask me anything..."
              aria-label="Enter your prompt"
            />
            {/* Textarea buttons */}
            <div className="flex items-center justify-between gap-2 p-3">
              {/* Left buttons */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full size-8 border-none hover:bg-background hover:shadow-md transition-[box-shadow]"
                >
                  <RiAttachment2
                    className="text-muted-foreground/70 size-5"
                    size={20}
                    aria-hidden="true"
                  />
                  <span className="sr-only">Attach</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full size-8 border-none hover:bg-background hover:shadow-md transition-[box-shadow]"
                >
                  <RiMicLine
                    className="text-muted-foreground/70 size-5"
                    size={20}
                    aria-hidden="true"
                  />
                  <span className="sr-only">Audio</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full size-8 border-none hover:bg-background hover:shadow-md transition-[box-shadow]"
                >
                  <RiLeafLine
                    className="text-muted-foreground/70 size-5"
                    size={20}
                    aria-hidden="true"
                  />
                  <span className="sr-only">Action</span>
                </Button>
              </div>
              {/* Right buttons */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full size-8 border-none hover:bg-background hover:shadow-md transition-[box-shadow]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                  >
                    <g clipPath="url(#icon-a)">
                      <path
                        fill="url(#icon-b)"
                        d="m8 .333 2.667 5 5 2.667-5 2.667-2.667 5-2.667-5L.333 8l5-2.667L8 .333Z"
                      />
                      <path
                        stroke="#451A03"
                        strokeOpacity=".04"
                        d="m8 1.396 2.225 4.173.072.134.134.071L14.604 8l-4.173 2.226-.134.071-.072.134L8 14.604l-2.226-4.173-.071-.134-.134-.072L1.396 8l4.173-2.226.134-.071.071-.134L8 1.396Z"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="icon-b"
                        x1="8"
                        x2="8"
                        y1=".333"
                        y2="15.667"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FDE68A" />
                        <stop offset="1" stopColor="#F59E0B" />
                      </linearGradient>
                      <clipPath id="icon-a">
                        <path fill="#fff" d="M0 0h16v16H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="sr-only">Generate</span>
                </Button>
                <Button className="rounded-full h-8">Ask Bart</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
