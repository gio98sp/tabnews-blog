import Image from "next/image";

import { Text } from "@thonlabs/ui";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full bg-gray-100 lg:w-[26.5rem] xl:w-[34.25rem]">
      <div className="flex items-center justify-center p-8 lg:h-screen">
        <div className="lg:fixed">
          <div className="flex items-center gap-3">
            <Image
              src={"https://avatars.githubusercontent.com/u/100538460?v=4"}
              width={88}
              height={88}
              alt="Foto de perfil do Giovane Santos"
              priority
              className="rounded-full border-2 border-black"
            />
            <div>
              <Text as="h1" variant="3xl" className="text-gray-800">
                Giovane Santos
              </Text>
              <Text
                as="div"
                variant="xs"
                className="-mt-0.5 italic text-gray-500"
              >
                Web Developer
              </Text>
            </div>
          </div>
          <div className="mt-6 lg:w-[20rem]">
            <Text as="p" variant="sm" className="mb-4 italic text-gray-500">
              Estudando programação a 1 ano e meio, e aprendendo mais a cada dia
              nesse universo gigantesco do desenvolvimento web
            </Text>
            <Link
              href="/"
              className="rounded-md bg-gray-200 px-2 py-1 font-semibold hover:bg-gray-300"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
