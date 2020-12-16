import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

const init = () => {
  library.add(faTwitter, faDiscord, faExternalLinkAlt);
  config.autoAddCss = false;
};

export default init;
