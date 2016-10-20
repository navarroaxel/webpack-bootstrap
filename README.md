# webpack-bootstrap
Repository to show a bug in shakacode/bootstrap-loader

After the git clone you can build booth webpack configurations:
````shell
npm install
npm run build1
npm run build2
````

The issue here is: The first config loaded applies to both entries. The second config is ignored.
