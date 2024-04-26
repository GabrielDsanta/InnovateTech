import { Platform } from "react-native";

const config = require("../../config.json");

export default function host() {
  let hostString = "";
  switch (config.environment) {
    case "development":
      hostString = config["dev-host"];
      break;

    case "test":
      hostString = config["test-host"];
      break;

    case "staging":
      hostString = config["staging-host"];
      break;
  }

  if (Platform.OS === "android") {
    hostString = hostString.replace("localhost", "10.0.2.2");
  }

  return hostString;
}
