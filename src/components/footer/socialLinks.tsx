import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export function SocialLinks() {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="cursor-pointer rounded-full bg-white p-2 shadow-md drop-shadow-md hover:bg-[#161B22] hover:transition hover:duration-300">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/matheus-tiburcio-82a337276/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </a>
            </div>
          </TooltipTrigger>
          <TooltipContent className="bg-[#161B22]">
            <p className="text-sm font-semibold text-zinc-50">Github</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="cursor-pointer rounded-full bg-white p-2 shadow-md drop-shadow-md hover:bg-[#0077B5] hover:transition hover:duration-300">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/matheus-tiburcio-82a337276/"
              >
                <svg
                  className="svg-inline--fa fa-linkedin-in fa-fw size-7 text-black"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="linkedin-in"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  ></path>
                </svg>
              </a>
            </div>
          </TooltipTrigger>
          <TooltipContent className="bg-[#0077B5]">
            <p className="text-sm font-semibold text-zinc-50">LinkedIn</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="cursor-pointer rounded-full bg-white p-2 shadow-md drop-shadow-md hover:bg-[#EB4336] hover:transition hover:duration-300">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/matheus-tiburcio-82a337276/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M 4 5 C 2.9069372 5 2 5.9069372 2 7 L 2 23 C 2 24.093063 2.9069372 25 4 25 L 26 25 C 27.093063 25 28 24.093063 28 23 L 28 7 C 28 5.9069372 27.093063 5 26 5 L 4 5 z M 6.6992188 7 L 23.300781 7 L 15 13.134766 L 6.6992188 7 z M 5 9.4746094 L 15 16.865234 L 25 9.4746094 L 25 23 L 5 23 L 5 9.4746094 z"></path>
                </svg>
              </a>
            </div>
          </TooltipTrigger>
          <TooltipContent className="bg-[#EB4336]">
            <p className="text-sm font-semibold text-zinc-50">Email</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
