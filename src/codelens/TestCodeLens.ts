import { CodeLens, Range } from 'vscode';

export class TestCodeLens extends CodeLens {
	constructor(
		public readonly message: string,
		range: Range
	) {
		super(range);
	}

	public toString(): string {
		return this.message;
	}
}