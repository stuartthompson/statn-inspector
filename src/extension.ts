// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { commands, Disposable, ExtensionContext, languages, window } from 'vscode';
import { TestCodeLensProvider } from './codelens/TestCodeLensProvider';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "statn-inspector" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const subscriptions: Disposable[] = [];

	// Command provider
	subscriptions.push(commands.registerCommand('statn-inspector.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		window.showInformationMessage('Hello World from statn-inspector!');
	}));
	subscriptions.push(commands.registerCommand('statn-inspector.showLensPreview', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		window.showInformationMessage('Show the Lens preview (statn inspector)!');
	}));

	// Hover provider
	subscriptions.push(languages.registerHoverProvider(
		'javascript', {
		provideHover(document, position, token) {
			return {
				contents: [`This is a test hover at ${JSON.stringify(position)}`]
			};
		}
	}
	));

	// Code lens provider
	subscriptions.push(
		languages.registerCodeLensProvider(
			"javascript",
			new TestCodeLensProvider()
		)
	);

	context.subscriptions.push(...subscriptions);
}

// this method is called when your extension is deactivated
export function deactivate() { }
