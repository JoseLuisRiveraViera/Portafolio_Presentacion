# Web Developer Portfolio

Hello, I'm José Luis Software Development and Management Engineering student with a background as a TSU in Multiplatform Software Development. Focused on full-stack web development, with experience in real-world projects using Next.js, React, and MySQL. Passionate about creating efficient and scalable solutions for enterprise environments.


**You can view my full portfolio by clicking the link below:**
👉 [https://portafolio-presentation.vercel.app/](https://portafolio-presentation.vercel.app/)

## Development and deployment

Use the pnpm version declared in `package.json` for dependency changes. Vercel installs from `pnpm-lock.yaml`.

```sh
pnpm install
pnpm dev
```

When adding or changing dependencies, commit both `package.json` and `pnpm-lock.yaml`. Before pushing, validate the same strict installation used by CI and build the site:

```sh
pnpm install --frozen-lockfile
pnpm build
```
