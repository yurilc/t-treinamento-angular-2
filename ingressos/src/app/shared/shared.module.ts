import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from "./highlight.directive";
import { SemVogaisPipe } from "./sem-vogais.pipe";
import { ResumoPipe } from './resumo.pipe';

@NgModule({
    declarations: [
        HighlightDirective,
        SemVogaisPipe,
        ResumoPipe
    ],
    exports: [
        CommonModule,
        HighlightDirective,
        SemVogaisPipe,
        ResumoPipe
    ]
})
export class SharedModule {}