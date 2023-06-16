#!/usr/bin/env node

import { execSync } from "child_process";
import os from "os";

init();

function init() {
  if (os.platform() === "darwin")
    execSync(`file_path="/usr/local/bin/code"
  content='VSCODE_CWD="$PWD" open -n -b "com.microsoft.VSCode" --args $*'
  sudo sh -c "echo '$content' > '$file_path'"
  sudo chmod +x /usr/local/bin/code`);
  else console.log("This package is for Mac");
}
