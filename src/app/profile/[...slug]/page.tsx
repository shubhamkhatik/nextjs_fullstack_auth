"use client";
// we r using app router so see docs of==> "Using App router"
// not page router
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

export default function Page({ params }: any) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  console.log("pathname", pathname);
  console.log("searchParams", searchParams.get("h"));
  console.log("router", router);
  console.log("params", params);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>hello</h1>
      <hr />
      <p className="text-4xl">
        hello routing on profile page
        <span className=" p-2 ml-2 rounded bg-orange-500 text-black">
          {params.slug}
        </span>
      </p>
    </div>
  );
}
