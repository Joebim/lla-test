import { Suspense } from "react";
import { Avatar } from "./avatar";
import { AvatarTwo } from "./avatar-two";


const Scene = () => {

  return (
    <>
      <ambientLight intensity={1.5} />
      <group rotation={[Math.PI / 13, 1.3, -0.2]} position={[-4, -4.5, 0]} >
      <Suspense>

        <Avatar />
      </Suspense>
      </group>
      <group rotation={[Math.PI / 13, 5, 0.2]} position={[4, -4.5, 0]} >
      <Suspense>
        <AvatarTwo />

      </Suspense>
      </group>
    </>
  );
};
export default Scene;
