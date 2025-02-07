import * as vscode from "vscode";
import TranslateWebview from "./webviews/instance/translate";
import AesWebview from "./webviews/instance/aes";
import Json2TsWebview from "./webviews/instance/json2ts";

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
