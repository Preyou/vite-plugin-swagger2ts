import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/adapters',
    'src/bin',
  ],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
})
