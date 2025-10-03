import { Box, Tooltip } from "@radix-ui/themes";
import Image from "next/image";

type techStackProps = {
    logo: string
}

export default function TechStack({ logo }: techStackProps) {


  return (
    <Tooltip content={`${logo}`}>
      <Box className="p-3 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg border border-gray-700 hover:scale-110 hover:shadow-cyan-500/40 transition-transform duration-300 ease-out">
        <Image
          src={`/TechStack/${logo}.svg`}
          width={48}
          height={48}
          alt={`${logo}`}
          className="drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]"
        />
      </Box>
    </Tooltip>
  );
}
