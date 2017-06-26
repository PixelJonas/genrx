import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import angular from "rollup-plugin-angular";
import typescript from "rollup-plugin-typescript";
import {nameLibrary, PATH_DIST, PATH_SRC} from "./config-library.js";
let sass = require('node-sass');

export default {
  entry: PATH_SRC + 'index.ts',
  format: 'umd',
  moduleName: nameLibrary,
  sourceMap: true,
  external: [
    "@ngrx/core",
    "@ngrx/effects",
    "@ngrx/router-store",
    "@ngrx/store"
  ],
  dest: PATH_DIST + nameLibrary + ".umd.js",
  plugins: [
    angular({
        preprocessors: {
          template: (template) => template,
          style: scss => {
            let css;
            if (scss) {
              css = sass.renderSync({data: scss}).css.toString();
            } else {
              css = '';
            }
            return css;
          },
        }
      }
    ),
    typescript({
      typescript: require('typescript')
    }),
    resolve({
      module: true,
      main: true
    }),
    commonjs({
      include: 'node_modules/**'
    })
  ],
  onwarn: warning => {
    const skip_codes = [
      'THIS_IS_UNDEFINED',
      'MISSING_GLOBAL_NAME'
    ];
    if (skip_codes.indexOf(warning.code) != -1) return;
    console.error(warning);
  }
}