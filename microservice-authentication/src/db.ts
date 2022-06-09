import { Pool } from "pg";

const connectionString = "postgres://ctfkzayd:AuDg0ZdVDn58k-X2mQ1EJUrovpy06i_f@queenie.db.elephantsql.com/ctfkzayd";

const db = new Pool({ connectionString });

export default db;