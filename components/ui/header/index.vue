<template>
  <UiHeaderTopbar />
  <UiHeaderMain :navItems="navItems" />
</template>

<script setup>
const navItems = [
  {
    label: "Onze diensten",
    key: "diensten",
    children: [
      { label: "Dienst 1", to: "/diensten/1" },
      { label: "Dienst 2", to: "/diensten/2" },
      { label: "Dienst 3", to: "/diensten/3" },
    ],
  },
  {
    label: "Branches",
    key: "branches",
    children: [
      { label: "Branch 1", to: "/branches/1" },
      { label: "Branch 2", to: "/branches/2" },
      { label: "Branch 3", to: "/branches/3" },
    ],
  },
  {
    label: "Kennisbank",
    key: "kennisbank",
    children: [
      { label: "Artikel 1", to: "/kennisbank/1" },
      { label: "Artikel 2", to: "/kennisbank/2" },
      { label: "Artikel 3", to: "/kennisbank/3" },
    ],
  },
  {
    label: "Over ons",
    key: "over-ons",
    children: [
      { label: "Team", to: "/over-ons/team" },
      { label: "Geschiedenis", to: "/over-ons/geschiedenis" },
      { label: "Missie & Visie", to: "/over-ons/missie" },
    ],
  },
  {
    label: "Contact",
    to: "/contact",
  },
];
</script>
