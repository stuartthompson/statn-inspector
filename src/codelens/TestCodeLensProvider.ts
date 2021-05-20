import { CancellationToken, CodeLens, CodeLensProvider, Position, Range, TextDocument } from 'vscode';
import { TestCodeLens } from './TestCodeLens';

export class TestCodeLensProvider implements CodeLensProvider {
    provideCodeLenses(
        document: TextDocument,
        token: CancellationToken
    ): CodeLens[] | Thenable<CodeLens[]> {
        const detected: {from: Position, to: Position}[] = [];

        detected.push({from: new Position(14, 11), to: new Position(14, 19)});
        detected.push({from: new Position(16, 11), to: new Position(16, 17)});

        return detected.map(d => new CodeLens(
            new Range(d.from, d.to), 
            {
                title: 'Statn Inspector',
                command: 'statn-inspector.showLensPreview'
            }
        ));
    }
}