import * as vscode from "vscode";
import TranslateWebview from "./webviews/instance/translate";

export default class Extension {
  constructor() {}

  public registerCommands(context: vscode.ExtensionContext): void {
    vscode.window.registerWebviewViewProvider(
      "wa-translate",
      new TranslateWebview(context),
      {
        webviewOptions: {
          retainContextWhenHidden: false,
        },
      }
    );
  }
}
