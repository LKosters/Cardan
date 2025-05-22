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
      { label: "Dienst 1", to: "#" },
      { label: "Dienst 2", to: "#" },
      { label: "Dienst 3", to: "#" },
    ],
  },
  {
    label: "Branches",
    key: "branches",
    children: [
      { label: "Branch 1", to: "#" },
      { label: "Branch 2", to: "#" },
      { label: "Branch 3", to: "#" },
    ],
  },
  {
    label: "Kennisbank",
    key: "kennisbank",
    children: [
      { label: "Artikel 1", to: "#" },
      { label: "Artikel 2", to: "#" },
      { label: "Artikel 3", to: "#" },
    ],
  },
  {
    label: "Over ons",
    key: "over-ons",
    children: [
      { label: "Team", to: "#" },
      { label: "Geschiedenis", to: "#" },
      { label: "Missie & Visie", to: "#" },
    ],
  },
  {
    label: "Contact",
    to: "#",
  },
];
</script>
