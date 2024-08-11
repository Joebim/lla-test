"use client";

import { MutateMediaLibrary } from "../../_component/media-library";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <MutateMediaLibrary id={params.id} dataType="animations" />
    </>
  );
}
