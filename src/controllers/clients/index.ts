import {Controller, Get, Header, Post, Req, Res} from "@nestjs/common";

interface Client {
    id: number,
    name: string,
    age: number
}

@Controller("clients")
export class Clients {
    clients: Array<Client>

    constructor() {
        this.clients = [
            {
                id: 1,
                name: "john",
                age: 19
            },
            {
                id: 2,
                name: "doe",
                age: 21
            }
        ]
    }

    @Get()
    public get() {
        return this.clients;
    }

    @Post('post')
    public post(@Req() req: any, @Res() res: any) {
        res.setHeader('Cache-Control', 'none');
        res.send(req.body);
    }
}