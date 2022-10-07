import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiServiceTemplate } from "../api.service.template";


@Injectable({
	providedIn: 'root',
})
export class SystemDisciplinesService extends ApiServiceTemplate {
	constructor(
		httpClient: HttpClient,
	) {
		super(httpClient);
	}

    listSystemDisciplines(){
        const endPoint = `${SystemDisciplinesService.prefixApiLocal}/system-disciplines`
        return this.list(endPoint);
    }
}