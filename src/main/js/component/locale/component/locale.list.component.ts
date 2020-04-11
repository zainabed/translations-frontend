import { Component, Injector, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { saveAs } from 'file-saver';
import { tap } from 'rxjs/operators';

import { ResourceListComponent, ResourcePath } from "../../../lib/component/resource.component.core";
import { ProjectService, ProjectResourceListComponent } from "../../project/project.core";
import { ImportUriDialogComponent } from "../dialog/import.uri.dialog.component";
import { ExportDialogComponent } from "../dialog/export.dialog.component";
import { MatDialog } from '@angular/material';

import { Locale } from "../model/locale";
import { LocaleUri } from "../model/locale.uri";
import { LocalService } from "../service/locale.service";
import { SecurityFactory, AuthenticationManager } from '@zainabed/security';
import { ModalHeaderService } from 'src/main/js/layout/header/modal/modal.header.service';
import { BottomSheetService } from 'src/main/js/layout/bottomsheet/bottomsheet.service';
import { HeaderService, BACKGROUND_COLOR, HEADER_POSITION, HEADER_TYPE, FAB_DIRECTION } from 'src/main/js/layout/header/header.service';

@ResourcePath({
    path: "locales",
    route: "/locales",
    id: "projectId"
})
@Component({
    selector: "locale-list",
    templateUrl: "./locale-list.html",
    styleUrls: ["./locale.scss"],
    host: {
        class: "column__xdt--10 column__dt--10 component column__mb--4"
    },
    entryComponents: [ImportUriDialogComponent]
})
export class LocaleListComponent extends ResourceListComponent<Locale> implements OnDestroy {

    private downloadLocaleCode: string;
    private localeApi: string;
    private projectApi: string;
    private projectService: ProjectService;
    private dialogWith: string = "500px"


    constructor(injector: Injector,
        public dialog: MatDialog,
        public http: HttpClient,
        public securityFactory: SecurityFactory,
        private modalHeaderServie: ModalHeaderService,
        bottomSheetService: BottomSheetService,
        headerService: HeaderService) {
        super(injector);
        this.projectService = injector.get(ProjectService);

        bottomSheetService.set([
            { title: "Locale", icon: "language", link: "/projects/" + this.projectService.projectId + "/locales" },
            { title: "Translation", icon: "translate", link: "/projects/" + this.projectService.projectId + "/translations" }
        ]);
        this.setHeader(headerService);
    }

    setHeader(headerService: HeaderService) {
        headerService.setHeader({
            title: "Language",
            background: BACKGROUND_COLOR.BLACK,
            position: HEADER_POSITION.STICKY,
            type: HEADER_TYPE.PROMINENT,
            fabDirection: FAB_DIRECTION.RIGHT
        });
    }

    ngOnDestroy(): void {
        this.modalHeaderServie.reset();
    }

    ngOnInit() {
        super.ngOnInit();
        this.projectApi = this.appData.getResourceListUrlFor(this.projectService.resource, this._path);
        this.localeApi = this.apiUrl;
        this.get();

        this.setModalHeader();

    }

    setModalHeader() {
        this.modalHeaderServie.title = "Locale";
        this.modalHeaderServie.color = "gray";
    }

    onGetSuccess(response) {
        super.onGetSuccess(response);
        this.getProjectLocales();
    }

    getProjectLocales() {
        this.resourcesService.get(this.projectApi).subscribe(this.onGetProjectLocalesSuccess.bind(this), this.onGetFail.bind(this));
    }

    onGetProjectLocalesSuccess(response) {
        let projectLocales = this.getEmbeddedResource(response);
        this.resourceList = LocalService.transform(this.resourceList, projectLocales, this.appData, this.projectApi);
    }

    post(apiPath) {
        this.resourcesService.post(apiPath, null).subscribe(this.onPostSuccess.bind(this), this.onRequestFail.bind(this));
    }

    delete(api) {
        this.resourceService.delete(api).subscribe(this.onDeleteSuccess.bind(this), this.onDeleteFail.bind(this));
    }

    download(api, code) {
        let dialogRef = this.dialog.open(ExportDialogComponent, {
            width: this.dialogWith,
            data: {}
        });

        let self = this;
        let authenticationManager: AuthenticationManager = this.securityFactory.getAuthenticationManager();
        let jwtToken = authenticationManager.get().getCredentials();
        dialogRef.afterClosed().subscribe(format => {
            if (format.length) {
                this.downloadLocaleCode = code;

                this.http.get(api + "/export/" + format, {
                    headers: {
                        Authorization: jwtToken.type + " " + jwtToken.token
                    },
                    responseType: 'text'
                }).subscribe(this.onDownloadSucess.bind(this), error => {
                    console.log(error);
                })
            }
        });

    }

    onDownloadSucess(response) {
        console.log(response);
        window.open(response, "_blank");
    }

    import(locale) {
        let dialogRef = this.dialog.open(ImportUriDialogComponent, {
            width: this.dialogWith,
            data: {}
        });

        dialogRef.afterClosed().subscribe(importFile => {
            if (importFile) {
                //let localeUri: LocaleUri = new LocaleUri(data, locale.code);
                this.importLanguage(locale.api, importFile);
            }
        });
    }

    importLanguage(api: string, importFile) {
        const formData: FormData = new FormData();
        formData.append('file', importFile.file, importFile.file.name);
        this.resourcesService.post(api + "/import/" + importFile.type, formData).subscribe(this.onImportSucess.bind(this), this.onRequestFail.bind(this));
    }

    onImportSucess(response) {
        this.showNotification("Imported translation successfuly");
    }

    onPostSuccess(response) {
        this.get();
    }

    toggleSideBar($event: any) {
        $event.stopPropagation();
        let event = new Event("toggle-navigation");
        document.dispatchEvent(event);
    }

}