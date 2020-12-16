import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkAlt,
  faCoins,
  faTrophy,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

const init = () => {
  library.add(
    faTwitter,
    faDiscord,
    faExternalLinkAlt,
    faCoins,
    faTrophy,
    faChevronDown
  );
  config.autoAddCss = false;
};

export default init;
