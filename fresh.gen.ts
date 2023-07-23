// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[slug].tsx";
import * as $1 from "./routes/about.tsx";
import * as $2 from "./routes/api/joke.ts";
import * as $3 from "./routes/api/login.ts";
import * as $4 from "./routes/api/logout.ts";
import * as $5 from "./routes/index.tsx";
import * as $6 from "./routes/login.tsx";
import * as $$0 from "./islands/Counter.tsx";
import * as $$1 from "./islands/LogButton.tsx";
import * as $$2 from "./islands/Login.tsx";
import * as $$3 from "./islands/Posts.tsx";

const manifest = {
  routes: {
    "./routes/[slug].tsx": $0,
    "./routes/about.tsx": $1,
    "./routes/api/joke.ts": $2,
    "./routes/api/login.ts": $3,
    "./routes/api/logout.ts": $4,
    "./routes/index.tsx": $5,
    "./routes/login.tsx": $6,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
    "./islands/LogButton.tsx": $$1,
    "./islands/Login.tsx": $$2,
    "./islands/Posts.tsx": $$3,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
