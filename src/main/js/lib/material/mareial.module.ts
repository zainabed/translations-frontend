import { NgModule } from "@angular/core";

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from "@angular/material";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        MatFormFieldModule,
        MatTableModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        MatListModule,
        MatDividerModule,
        MatSidenavModule,
        MatToolbarModule,
        FlexLayoutModule,
    ],
    exports: [
        MatFormFieldModule,
        MatTableModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        MatListModule,
        MatDividerModule,
        MatSidenavModule,
        MatToolbarModule,
        FlexLayoutModule,
    ]
})
export class MaterialModule {

}