import { Router } from "express";

import SelecaoControlle from "./app/controlles/selecaoControle.js";

const router = Router ()

router.get('/selecoes/', SelecaoControlle.index )

router.get ('/selecoes/:id', SelecaoControlle.show)


router.post('/selecoes/', SelecaoControlle.store )

//Excluindo Seleções apartir do Id//
router.delete('/selecoes/:id', SelecaoControlle.delete )

router.put ('/selecoes/:id', SelecaoControlle.update)

export default router 
