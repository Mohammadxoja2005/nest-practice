import {Module} from "@nestjs/common";
import {Clients} from "./controllers/clients";

@Module({
    controllers: [Clients],
    providers: []
})

export class AppModule {

}