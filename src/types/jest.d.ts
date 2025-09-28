/// <reference types="jest" />

declare global {
  const describe: typeof import("jest").describe;
  const it: typeof import("jest").it;
  const expect: typeof import("jest").expect;
  const beforeEach: typeof import("jest").beforeEach;
  const afterEach: typeof import("jest").afterEach;
  const jest: typeof import("jest");
}

export {};
