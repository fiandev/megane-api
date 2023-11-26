export const lists = [
  {
    name: "lahelu",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgR6aL4ukYBo4DpHfmghq7KJbXUMDer9MCMfM0A2hBCv1mNDvgu233viQ&s=10",
    path: "/docs/lahelu",
    description: "API to get memes data from the Lalahelu website.",
  },
  {
    name: "region of indonesia",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
    path: "/docs/region-of-indonesia",
    description:
      "API that can be used to search for detailed information from a region of Indonesia.",
  },
  {
    name: "NIK parsing API",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11McTHqY7opMtOW6r18dwg0QDjR-es1BLwA&usqp=CAU",
    path: "/docs/nik-parsing",
    description:
      "An API based on the NIK format and parses any available data.",
  },
  {
    name: "shortlink API",
    icon: "https://cloud.githubusercontent.com/assets/180698/10263413/77ab7474-69ee-11e5-905a-cee324f3564b.png",
    path: "/docs/shortlink",
    description:
      "API that can help in creating new shortlinks without needing to visit the relevant shortlink website.",
  },
  {
    name: "Alqur'an API",
    icon: "https://my-quran-gray.vercel.app/graph.jpg",
    path: "/docs/quran",
    description:
      "API that provides Al-Quran data complete with translation and interpretation",
  },
  {
    name: "Instagram API",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/900px-Instagram_logo_2022.svg.png",
    path: "/docs/instagram",
    description: "API that provides to get metadata of instagram post",
  },
  {
    name: "Tiktok API",
    icon: "https://img.freepik.com/free-photo/3d-realistic-isolated-isometric-tiktok-icon_125540-2043.jpg",
    path: "/docs/tiktok",
    description: "API that provides to get metadata of tiktok post",
  },
].sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
