import { loadFilesSync } from "@graphql-tools/load-files"
import { mergeTypeDefs } from "@graphql-tools/merge"
import path, { dirname } from "path"
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const typesArray = loadFilesSync(path.join(__dirname), { extensions: ['graphql'], ignoreIndex: true })

export default mergeTypeDefs(typesArray)