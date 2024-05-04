import { baa, foo } from "lib-hello";

export default function FooStaticComponent() {
  return (
    <div>
      <h2>from lib-hello:</h2>
      <p>{foo()}</p>
      <p>{baa()}</p>
    </div>
  );
}
