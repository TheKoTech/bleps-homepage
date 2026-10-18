# A homepage for our home server

<img width="938" height="447" alt="image" src="https://github.com/user-attachments/assets/23fc5fe9-97e8-46e8-ac0f-f9b7cce40ab5" />

## Optimized to hell

`v1` was written in Vue, but that added quite a bit of unnecessary functionality like reactivity and dynamic rendering. `v2` is built with Astro and the page is generated statically.

The site itself went from 34.2kb down to 4.6kb gzipped, the new DepartureMono font is 22kb gzipped compared to 46kb VT323, so another couple of kb saved. I could subset the font to make the app ~6-8kb instead of 28, but the search input is user input, so I decided against it, it's already small as heck

**Total**: 81.21kb -> 27.23kb

Useful? Nope. But it was fun.
