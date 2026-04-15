import cupcake01 from "../assets/images/cupcakes/01-Cherry\u2011Topped Sprinkle.jpeg";
import cupcake02 from "../assets/images/cupcakes/02-Chocolate & Chips.jpeg";
import cupcake03 from "../assets/images/cupcakes/03-Chocolate with delicacy.jpeg";
import cupcake04 from "../assets/images/cupcakes/04-Chocolate with nutella.jpeg";
import cupcake05 from "../assets/images/cupcakes/05-Fun Buttercream Dream.jpeg";
import cupcake06 from "../assets/images/cupcakes/06-Red Velvet.jpeg";
import cupcake07 from "../assets/images/cupcakes/07-Vanilla with delicacy.jpeg";
import cupcake08 from "../assets/images/cupcakes/08-Vanilla with nutella.jpeg";

import wedding01 from "../assets/images/weddingcakes/01-four-tier-floral-cascade-cake.jpeg";
import wedding02 from "../assets/images/weddingcakes/02-classic-white-rose-tiers.jpeg";
import wedding03 from "../assets/images/weddingcakes/03-ornate-scroll-rose-cake.jpeg";
import wedding04 from "../assets/images/weddingcakes/04-pearl-bow-floral-cake.jpeg";
import wedding05 from "../assets/images/weddingcakes/05-romantic-rose-garden-cake.jpeg";
import wedding06 from "../assets/images/weddingcakes/06-blush-scroll-wedding-cake.jpeg";
import wedding07 from "../assets/images/weddingcakes/07-bright-rose-swirl-cake.jpeg";
import wedding08 from "../assets/images/weddingcakes/08-textured-blush-bloom-cake.jpeg";

const cupcakes = [
  { id: "cupcake-01", name: "Cherry\u2011Topped Sprinkle", price: 4.25, image: cupcake01, category: "cupcakes" },
  { id: "cupcake-02", name: "Chocolate & Chips", price: 3.00, image: cupcake02, category: "cupcakes" },
  { id: "cupcake-03", name: "Chocolate with Delicacy", price: 3.00, image: cupcake03, category: "cupcakes" },
  { id: "cupcake-04", name: "Chocolate with Nutella", price: 3.00, image: cupcake04, category: "cupcakes" },
  { id: "cupcake-05", name: "Fun Buttercream Dream", price: 3.00, image: cupcake05, category: "cupcakes" },
  { id: "cupcake-06", name: "Red Velvet", price: 4.25, image: cupcake06, category: "cupcakes" },
  { id: "cupcake-07", name: "Vanilla with Delicacy", price: 3.00, image: cupcake07, category: "cupcakes" },
  { id: "cupcake-08", name: "Vanilla with Nutella", price: 3.00, image: cupcake08, category: "cupcakes" },
];

const weddingCakes = [
  { id: "wedding-01", name: "Four\u2011Tier Floral Cascade", price: 40.00, image: wedding01, category: "weddingCakes" },
  { id: "wedding-02", name: "Classic White Rose Tiers", price: 40.00, image: wedding02, category: "weddingCakes" },
  { id: "wedding-03", name: "Ornate Scroll Rose Cake", price: 40.00, image: wedding03, category: "weddingCakes" },
  { id: "wedding-04", name: "Pearl Bow Floral Cake", price: 40.00, image: wedding04, category: "weddingCakes" },
  { id: "wedding-05", name: "Romantic Rose Garden Cake", price: 40.00, image: wedding05, category: "weddingCakes" },
  { id: "wedding-06", name: "Blush Scroll Wedding Cake", price: 40.00, image: wedding06, category: "weddingCakes" },
  { id: "wedding-07", name: "Bright Rose Swirl Cake", price: 40.00, image: wedding07, category: "weddingCakes" },
  { id: "wedding-08", name: "Textured Blush Bloom Cake", price: 40.00, image: wedding08, category: "weddingCakes" },
];

export const defaultProducts = [...cupcakes, ...weddingCakes];
