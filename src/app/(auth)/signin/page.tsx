"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        className="bg-orange-500 px-3 py1 m-4 rounded"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </>
  );
}
