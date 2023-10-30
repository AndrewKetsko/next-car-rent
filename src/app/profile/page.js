import { getServerSession } from "next-auth/next";
import { nextConfig } from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";

export default async function ProfPage() {
  const session = await getServerSession(nextConfig);
  return (
    <>
      <h2>Profile of {session?.user?.name}</h2>
      {session?.user?.image && (
        <Image
          alt="profile image"
          src={session?.user?.image}
          height={200}
          width={200}
        />
      )}
    </>
  );
}
