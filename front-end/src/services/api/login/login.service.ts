import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiServiceTemplate } from "../api.service.template";
import { UserLogin } from "./interface/UserLogin";


@Injectable({
	providedIn: 'root',
})
export class LoginService extends ApiServiceTemplate {
	constructor(
		httpClient: HttpClient,
	) {
		super(httpClient);
	}

    login(params: UserLogin){
        const endPoint = `${ApiServiceTemplate.prefixApiLocal}/login`
        return this.post(endPoint,params);
    }
}