import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Visit",
    path: "/Visit",
  },
  {
    title: "Galleries",
    path: "/Galleries",
  },
  {
    title: "Artifacts",
    path: "/Artifacts",

    subNav: [
      {
        title: "Aircraft",
        path: "/Artifacts/Aircraft",
      },
      {
        title: "Eng and Sub",
        path: "/Artifacts/Eng",
      },
      {
        title: "Armament",
        path: "/Artifacts/Armament",
      },
      {
        title: "Radar and SAM",
        path: "/Artifacts/Radar",
      },
    ],
  },
  {
    title: "Special Attractions",
    path: "/Special",

    subNav: [
      {
        title: "Matiur Rahman Holography Theater",
        path: "/Speical/Holography",
      },
      {
        title: "Aircraft Simulator",
        path: "/Special/AirSim",
      },
      {
        title: "VR Simulator",
        path: "/Special/VRSim",
      },
      {
        title: "Sky TV",
        path: "/Special/SkyTV",
      },
      {
        title: "Kilo Flight Mini-Cinema",
        path: "/Special/MiniCinema",
      },
    ],
  },
  {
    title: "Walkthrough Video",
    path: "/Walkthrough",
  },
];
