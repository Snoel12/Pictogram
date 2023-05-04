import React from "react";
import Stories from "../components/Stories";

const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      {/* section */}
      <section className="col-span-2">
        <Stories />
        {/*posts*/}
      </section>

      {/* section */}
      <section>
        {/*mini profile*/}
        {/*suggested friends*/}
      </section>
    </main>
  );
};

export default Feed;
