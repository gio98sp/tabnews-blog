import { Text } from "@thonlabs/ui";

export const Footer = () => {
  const linkClassName =
    "text-gray-500 hover:text-gray-800 transition-all duration-200ms ease-in-out";

  return (
    <footer className="flex items-center justify-between border-t border-solid border-t-gray-200 pt-4">
      <div className="flex flex-col">
        <Text className="font-bold italic text-gray-800">Giovane!</Text>
        <Text variant="xs" className="text-gray-500">
          giovane98sp@gmail.com
        </Text>
      </div>

      <ul className="flex gap-2.5">
        <li>
          <a
            href="https://www.linkedin.com/in/giovane98sp/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/gio98sp"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100040316592013"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/giovane98sp/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            Instagram
          </a>
        </li>
      </ul>
    </footer>
  );
};
