import { chromium, firefox, LaunchOptions, webkit } from "playwright-core";

const options: LaunchOptions = {
  headless: false
}

export const invokeBrowser = () => {
  const browserType = process.env.BROWSER || "chrome";
  switch (browserType){
    case "chrome":
      return chromium.launch(options);
    case "firefox":
      return firefox.launch(options);
    case "webkit":
      return webkit.launch(options);
      throw new Error("Please set the proper browser!");
  }
}