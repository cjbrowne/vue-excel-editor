import vue from 'rollup-plugin-vue'
import resolve from '@rollup/plugin-node-resolve'
import minify from 'rollup-plugin-babel-minify'
import css from 'rollup-plugin-import-css'
import cleanup from 'rollup-plugin-cleanup'

export default {
  input: 'src/main.js',
  output: {
    name: 'VueExcelComponent',
    exports: 'named',
    globals: {
      'vuedraggable': 'vuedraggable',
      'xlsx': 'XLSX',
      'moment': 'moment'
    }
  },
  plugins: [
    vue({
      css: true,
      compileTemplate: true
    }),
    resolve({
      moduleDirectories: ['node_modules'],
    }),
    minify({
      // workaround https://github.com/babel/minify/issues/556
      mangle: false
    }),
    css(),
    cleanup()
  ],
  external: [
    'vuedraggable',
    'xlsx',
    'moment'
  ]
}
