import moment from "moment";

export const navbarBrand = "నేటి ముచ్చట్లు";
export const header = (category) => `న్యూస్ - టాప్ ${category} హెడ్‌లైన్స్`;
export const pageHeader = (category) => `న్యూస్ - ${category} హెడ్‌లైన్స్`; // Added export for pageHeader
export const noFound = "No Results Found";
export const searching = "Searching...";
export const arrow = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
  </svg>
);

export const navs = [
  { nav: "హోమ్", page: "/" },
  { nav: "జనరల్", page: "/categories/general" },
  { nav: "వ్యాపారం", page: "/categories/business" },
  { nav: "క్రీడలు", page: "/categories/sports" },
  { nav: "శాస్త్రం", page: "/categories/science" },
  { nav: "ఆరోగ్యం", page: "/categories/health" },
  { nav: "వినోదం", page: "/categories/entertainment" },
  { nav: "సాంకేతికత", page: "/categories/technology" },
];

export const router = [
  { path: "/", key: "general", category: "general", country: "in" },
  { path: "/categories/general", key: "general", category: "general", country: "in" },
  { path: "/categories/business", key: "business", category: "business", country: "in" },
  { path: "/categories/sports", key: "sports", category: "sports", country: "in" },
  { path: "/categories/science", key: "science", category: "science", country: "in" },
  { path: "/categories/health", key: "health", category: "health", country: "in" },
  { path: "/categories/entertainment", key: "entertainment", category: "entertainment", country: "in" },
  { path: "/categories/technology", key: "technology", category: "technology", country: "in" },
];

export const summary = "Channel and PublishedAt";
export const newsChannel = (channel) => `${channel}`;
export const lastUpdate = (published) =>
  `${moment(published).format("ddd, DD MMM YYYY HH:mm:ss")}`;
