"use client";

import { MutateMediaLibrary } from "../../_component/media-library";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <MutateMediaLibrary dataType="objects" id={params.id} />
    </>
  );
}
