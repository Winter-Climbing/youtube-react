/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#FF0000",
      },
    },
  },
  plugins: [
    // ...
    // 텍스트가 최대 2줄을 넘지 않았으면 좋겠다와 같은 것을
    // line-clamp라고 한다.
    // tailwind 자체적으로 지원해주지 않기 때문에 따로 설치하고 plugin해야 한다.
    require("@tailwindcss/line-clamp"),
  ],
};
