import { SFW } from "./Structures/Classes/SFW/index";
import { Request } from "./Structures/Request/Request";
import { Misc } from "./Structures/Classes/Extra/Misc";
import { NSFW } from "./Structures/Classes/NSFW";


export class FluxpointClient {
    public token: string;
    public request: Request;
    public sfw: SFW;
    public nsfw: NSFW;
    public misc: Misc;
    constructor(options = {
        token: null as unknown as string,
    }) {
        this.token = options.token;
        this.request = new Request(this.token);
        this.sfw = new SFW(this);
        this.misc = new Misc(this);
        this.nsfw = new NSFW(this);
    };
};