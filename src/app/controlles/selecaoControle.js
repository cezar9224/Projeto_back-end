
import SelecaoRepositorio from "../repositorios/selecaorepository.js"

class SelecaoControlle{

     async index(req, res) {
        const row = await SelecaoRepositorio.findAll()     
        res.json(row)
      }

     async show(req, res) {
        // res.json (buscarSelecaoPorId (req.params.id))//
           const id = req.params.id
           const row = await SelecaoRepositorio.findById(id)
           res.json(row)
      }
     async store(req, res) {
            const selecao = req.body
            const row = await SelecaoRepositorio.create(selecao)
            res.json(row)
            
     }
     async update (req, res) {
            const id = req.params.id
            const selecao = req.body
            const row = await SelecaoRepositorio.updade(selecao, id)
            res.json(row)
          
   } 
    async delete(req, res) {
        const id = req.params.id
        const row = await SelecaoRepositorio.delete(id)
        res.json(row)
  }
}
export default new SelecaoControlle ()