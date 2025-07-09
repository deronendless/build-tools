const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["./src/index.js"],
    bundle: true,
    outfile: "./dist/bundle.js",
    minify: false,
    sourcemap: true,
    platform: "browser",
    target: ["es2015"],
  })
  .then((aaa) => {
    console.log("打包完成！");
  })
  .catch(() => process.exit(1));
