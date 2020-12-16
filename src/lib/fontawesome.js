import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const init = () => {
  library.add(faTwitter, faDiscord, faExternalLinkAlt);
};

export default init;
