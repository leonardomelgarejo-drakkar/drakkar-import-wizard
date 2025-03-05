export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENV: "dev" | "test";
      BASEURL: string;
    }
  }
}
