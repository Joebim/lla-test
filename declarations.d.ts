// declarations.d.ts
declare module "*.glb" {
  const value: string;
  export default value;
}

declare module "@react-three/drei" {
  export * from "three-stdlib";
}
