# Yarn Berry Monorepo로 Vite 패키지 2개 구성

## 1. 기본 구성

- TypeScript, ESLint, Prettier, React, Vite, Husky, Lint-stagedl, Commitlint

## 2. 각 단계 설명

- [x] yarn berry를 패키지 매니저로 사용하기
  - 실행: `nvm use 18`로 Node 18 버전을 사용하기
  - 생성: `.nvmrc`를 만들고 Node 18 버전으로 지정하기
  - 실행: `corepack enable`로 yarn 설치하기
  - 실행: `yarn init -w - 2`로 패키지 생성하기
  - 생성: `.yarnrc.yml` 파일에 버전 추가하기 ...?
  - 생성: `.gitignore` 파일
  - 실행: `yarn config --why`로 PnP 사용 중인지 확인하기
  - 변경: `.yarnrc.yml`에서 `nodeLinker: pnp`로 변경하고, `yarn` 실행하기
- [x] 공통 의존성으로 TypeScript를 사용하기
  - 설치: `yarn add -D typescript`
  - 실행: `yarn tsc --init`으로 설정 파일 생성하기
  - 실행: `yarn dlx @yarnpkg/sdks vscode`
  - 확인: `.vscode/settings.json` 파일에 `"typescript.tsdk": ".yarn/sdks/typescript/lib"`, `"typescript.enablePromptUseWorkspaceTsdk": true` 옵션이 설정되었는지 확인하기
- [x] 공통 의존성으로 ESLint, Prettier를 사용하기
  - 설치: `yarn add -D eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-prettier eslint-plugin-simple-import-sort eslint-plugin-unused-imports`
  - 생성: `.eslintrc.cjs`에 설정 내용 추가
  - 생성: `.eslintignore`에 설정 내용 추가
  - 생성: `.prettierrc.cjs`에 설정 내용 추가
  - 생성: `.prettierignore`에 설정 내용 추가
  - 실행: `yarn dlx @yarnpkg/sdks vscode`
  - 확인: `.vscode/settings.json` 파일에 `"eslint.nodePath": ".yarn/sdks"`, `"prettier.prettierPath": ".yarn/sdks/prettier/index.js"` 옵션이 설정되었는지 확인하기
- [x] Git Commit Hook 설정하기
  - 설치: `yarn add -D lint-staged @commitlint/cli @commitlint/config-conventional`
  - 변경: package.json의 `scripts`에 `postinstall: husky install` 추가
  - 생성: `.husky` 폴더 밑에 `pre-commit`, `commit-msg`, `pre-push` 등 추가
  - 생성: `.lintstagedrc.cjs` 파일에 lint-staged 설정 내용 추가
- [x] 각 패키지 추가하기
  - 실행: `packages` 밑에 폴더 추가하기
  - 변경: 루트 package.json의 `workspaces`에 신규 패키지의 루트 폴더를 상대 경로로 추가하기
  - 생성: `tsconfig.json`를 만들고, `extends` 옵션에 루트 폴더의 tsconfig를 추가하기
  - 생성: `.eslintrc.cjs`를 만들기 (`extends` 같은 옵션은 필요 없음. 알아서 됨)
