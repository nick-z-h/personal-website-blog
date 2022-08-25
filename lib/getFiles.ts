import { readdirSync } from "fs";
import { join } from "path";

export const getFiles = async (type: string) => {
    return readdirSync(join(process.cwd(), "data", type));
};
