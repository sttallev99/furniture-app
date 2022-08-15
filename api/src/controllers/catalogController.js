const router = require('express').Router();

const User = require('../models/User');
const furnitureService = require('../services/furnitureService');

router.get('/', async(req, res) => {
    if(req.query.where) {
        let furniture = await furnitureService.getOwn(req.user._id);
        res.json(furniture);
    } else {
        let furniture = await furnitureService.getAll();
        res.json(furniture);
    }

});

router.post('/', async(req, res) => {

    await furnitureService.create({...req.body, _ownerId: req.user._id});

    res.json({ ok: true })
});

router.get('/:id', async(req, res) => {
    const furnitureId = req.params.id;
    let furniture = await furnitureService.getOne(furnitureId);

    res.json(furniture);
});

router.put('/:id', async(req, res) => {
    await furnitureService.updateFurniture(req.params.id, req.body);

    res.json({ ok: true })
});

router.delete('/:id', async(req, res) => {
    await furnitureService.deleteFurniture(req.params.id);

    res.json({ok: true});
});

module.exports = router;