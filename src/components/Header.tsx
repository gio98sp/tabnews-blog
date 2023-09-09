import { Text } from "@thonlabs/ui";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center bg-gray-100 p-8 lg:h-screen lg:p-0">
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
          <Text as="div" variant="xs" className="-mt-0.5 italic text-gray-500">
            Web Developer
          </Text>
        </div>
      </div>

      <div className="mt-6 w-full lg:mt-12 lg:w-[20rem]">
        <Text as="p" variant="sm" className="italic text-gray-500">
          Estudando programação a 1 ano e meio, e aprendendo mais a cada dia nesse
          universo gigantesco do desenvolvimento web
        </Text>
      </div>
    </header>
  );
};
