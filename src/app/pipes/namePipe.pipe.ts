import { Pipe } from '@angular/core';
import { AppState } from '../state/appState.state';

@Pipe({name: 'nameExtractor'})
export class NameExtractorPipe implements Pipe{
    name: string;
    pure?: boolean;
    transform(value: AppState): string {
        return value.name;
      }

    
}