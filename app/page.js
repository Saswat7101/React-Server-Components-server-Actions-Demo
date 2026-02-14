// import ClientDemo from "@/components/ClientDemo";
// import DataFetchingDemo from "@/components/DataFetchingDemo";
// import ServerActionsDemo from "@/components/ServerActionsDemo";
import UsePromiseDemo from "@/components/UsePromisesDemo";
import { Suspense } from "react";
// import RSCDemo from "@/components/RSCDemo";

export default async function Home() {
  return (
    <main>
      <Suspense fallback={<p>Loading users...</p>}>
        <UsePromiseDemo />
      </Suspense>
    </main>
  );
}
