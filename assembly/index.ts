import {Context, storage} from "near-sdk-as";

export class Greeting{
    setGreeting(accountId: string) : string | null{
        return storage.get<string>(accountId, "Greeting not available");
    }

    getGreeting(greetig: string): void{
        storage.set(Context.sender, greetig)

    }
}