declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE: string;
      USER_SQL: string;
      PASS_SQL: string;
      PORT: string;
      HOST_SQL: string;
    }
  }
}

export {}