import Image from "next/image";
import Typewriter from "typewriter-effect";

interface PlayerThoughtProperties {
  thought: string;
}

export const PlayerThought: React.FC<PlayerThoughtProperties> = ({
  thought,
}) => {
  return (
    <div
      className="relative top-[30px] flex h-[145px] w-[240px] items-center justify-center rounded-[10px] border-2 border-[#FE6A19] bg-black bg-opacity-30 p-6"
      data-testid="thought-bubble"
    >
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 transform">
        <Image
          src="/images/thought/Vector.png"
          alt="Thought vector"
          width={80}
          height={80}
          className="animate-beat"
        />
      </div>
      <p className="overflow-hidden text-center text-sm leading-tight text-white">
        <Typewriter
          options={{
            strings: `${thought}`,
            autoStart: true,
            delay: 30,
            cursor: "",
          }}
        />
      </p>
    </div>
  );
};

const ExampleComponent: React.FC = () => {
  return (
    <div>
      <PlayerThought thought="I need to ask where the baby is" />
    </div>
  );
};

export default ExampleComponent;
