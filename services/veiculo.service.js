class clienteService {
    async getALL(){
 const res = await Pool.query ("SELECT *")
 return res.rows;
    }
async creats (dados) {
const res = await Pool.query ("INSERT INTOO.. RETURNING *", ["FIAT"] ["porche"])
return res.rows(0);
}}
