import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import filesize from 'rollup-plugin-filesize';
import babel from '@rollup/plugin-babel';

import pkg from'./package.json';

export default {
    input: 'src/Editor.js',
    output: [
      {
        name: 'AlpineEditor',
        file: pkg.main,
        format: 'umd'
      },
    ],
    plugins: [
        nodeResolve(),
        terser(),
        filesize(),
        babel({
          babelHelpers: 'bundled',
          exclude: 'node_modules/**'
        })
    ],
}