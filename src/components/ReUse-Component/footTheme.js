// theme.js

const destinationThemes = {
  assam: {
    icon: "🍃",
    background: "linear-gradient(to right,#A7E6D7,  #fefae0, #e1f7e7)",
    text: "#274e13",
    subText: "#5c7f66",
    accent: "#52b788",
    hover: "#fff",
    border: "#aac8b2",
    inputBg: "rgba(255, 255, 255, 0.85)",
    waveGradient: [
      { offset: "0%", color: "#A7E6D7" },
      { offset: "50%", color: "#fefae0" },
      { offset: "100%", color: "#e1f7e7" },
    ],
  },

  kashmir: {
    icon: "🏔️",
    background: "linear-gradient(to right, #e0f7fa, #b2ebf2)",
    text: "#034752",
    subText: "#447371",
    accent: "#00bcd4",
    hover: "#00acc1",
    border: "#90caf9",
    inputBg: "rgba(255,255,255,0.5)",
    waveGradient: [
      { offset: "0%", color: "#e0f7fa" },
      { offset: "100%", color: "#b2ebf2" },
    ],
  },

  kerala: {
    icon: "🌿",
    background: "linear-gradient(to right, #d7f5d0, #a8e6cf)",
    text: "#1B4332",
    subText: "#2d6a4f",
    accent: "#52b788",
    hover: "#40916c",
    border: "#b7e4c7",
    inputBg: "rgba(255, 255, 255, 0.7)",
    waveGradient: [
      { offset: "0%", color: "#d7f5d0" },
      { offset: "100%", color: "#a8e6cf" },
    ],
  },

  maldives: {
    icon: "🏝️",
    background: "linear-gradient(to right, #a1f3f7, #3ec1a2, #48cae4)",
    text: "#013a63",
    subText: "#468faf",
    accent: "#ffd166",
    hover: "#ffc300",
    border: "#89c2d9",
    inputBg: "rgba(255, 255, 255, 0.75)",
    waveGradient: [
      { offset: "0%", color: "#a1f3f7" },
      { offset: "50%", color: "#3ec1a2" },
      { offset: "100%", color: "#48cae4" },
    ],
  },

  manali: {
    icon: "🏔️",
    background: "linear-gradient(to right, #e6f0f3, #d4ebf2, #b9e0ee)",
    text: "#034752",
    subText: "#447371",
    accent: "#00bcd4",
    hover: "#00acc1",
    border: "#90caf9",
    inputBg: "rgba(255,255,255,0.5)",
    waveGradient: [
      { offset: "0%", color: "#e6f0f3" },
      { offset: "50%", color: "#d4ebf2" },
      { offset: "100%", color: "#b9e0ee" },
    ],
  },

  darjeeling: {
    icon: "🌄",
    background: "linear-gradient(to right, #dfeeea, #cce3dd, #b5d9d2)",
    text: "#30534b",
    subText: "#547c71",
    accent: "#69b9a5",
    hover: "#59a193",
    border: "#aad4cb",
    inputBg: "rgba(255, 255, 255, 0.6)",
    waveGradient: [
      { offset: "0%", color: "#dfeeea" },
      { offset: "50%", color: "#cce3dd" },
      { offset: "100%", color: "#b5d9d2" },
    ],
  },
goa: {
  background: "linear-gradient(to right, #fefae0, #e0f7fa)",
  text: "#1b1b1b",
  subText: "#555",
  accent: "#ffb703",
  hover: "#fb8500",
  border: "#ccc",
  inputBg: "#ffffff", // ✅ make sure this is white
  waveGradient: [
    { offset: "0%", color: "#fefae0" },
    { offset: "100%", color: "#e0f7fa" },
  ],
  iconText: "#fff",
}
,
  default: {
    icon: "✈️",
    background: "linear-gradient(to right, #FEEBCB, #A7E6D7)",
    text: "#fff",
    subText: "gray",
    accent: "#facc15",
    hover: "#facc15",
    border: "#333",
    inputBg: "#1f2937",
    waveGradient: [
      { offset: "0%", color: "#FEEBCB" },
      { offset: "100%", color: "#A7E6D7" },
    ],
  },
};

export default destinationThemes;
