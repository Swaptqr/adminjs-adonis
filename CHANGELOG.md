# Changelog

## 2.0.0

### Breaking changes

- **AdonisJS v7 only.** Peer dependencies are now `@adonisjs/core` ^7.0.0, `@adonisjs/session` ^8.0.0 and (optional) `@adonisjs/lucid` ^22.0.0. AdonisJS v6 applications must stay on `@adminjs/adonis` 1.x.
- **Node.js 24 or later is required**, matching AdonisJS v7.
- **`adminjs` >= 7.8.10 is required.** Earlier AdminJS releases use the `assert { type: 'json' }` import syntax, which Node.js 22+ rejects at startup.

### Public API

The exported API is unchanged: `configure`, `stubsRoot`, `LucidResource`, the types in `src/types.ts`, the `@adminjs/adonis/adminjs_provider` provider and the generated config stubs behave the same as in 1.x.

### Internal changes

- `stubsRoot` is resolved with `import.meta.dirname` because `getDirname` was removed from `@poppinss/utils`.
- Tooling moved to ESLint 10 (flat config via `@adonisjs/eslint-config` v3), TypeScript 5.9 and `@adonisjs/tsconfig` v2. `ts-node` is no longer used.
- The `example/` application was upgraded to an AdonisJS v7 app (`@poppinss/ts-exec`, `indexEntities` hook, `config/encryption.ts`).
