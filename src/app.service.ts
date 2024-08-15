import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getHello(): string {
		return "Cronjob do his job (づ￣ 3￣)づ";
	}
}
