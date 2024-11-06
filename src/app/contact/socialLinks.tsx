import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export function SocialLinks() {
  return (
    <div className="flex gap-7">
      <div>
        <a
          href="https://github.com/0kira-vgl"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-between gap-x-6 py-5 lg:items-center"
        >
          <div>
            <FaGithub className="size-11 rounded-lg border p-2 shadow-md dark:text-zinc-50" />
          </div>
        </a>
      </div>

      <div>
        <a
          href="https://www.linkedin.com/in/matheus-tiburcio-82a337276/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-between gap-x-6 py-5 lg:items-center"
        >
          <div>
            <FaLinkedinIn className="size-11 rounded-lg border p-2 shadow-md dark:text-zinc-50" />
          </div>
        </a>
      </div>

      <div>
        <a
          href="mailto:matheusgtiburcio@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-between gap-x-6 py-5 lg:items-center"
        >
          <div>
            <MdOutlineMailOutline className="size-11 rounded-lg border p-2 shadow-md dark:text-zinc-50" />
          </div>
        </a>
      </div>
    </div>
  );
}
