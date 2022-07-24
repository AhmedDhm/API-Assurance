const Assurance = require('../models/assurance')

module.exports = {
    addInfo : async (req,res)=>{
        const {refClient,nomClient,prenomClient,addresseClient,telClient,assureur,agence,numContrat,DBContrat,DFContrat,voiture,immatriculation,typeContrat} = req.body

        var assurance = new Assurance()

        assurance.refClient = refClient
        assurance.nomClient = nomClient
        assurance.prenomClient = prenomClient
        assurance.addresseClient = addresseClient
        assurance.telClient = telClient
        assurance.assureur = assureur
        assurance.agence = agence
        assurance.numContrat = numContrat
        assurance.DBContrat = DBContrat
        assurance.DFContrat = DFContrat
        assurance.typeContrat.push(...typeContrat)
        assurance.voiture = voiture
        assurance.immatriculation = immatriculation

        try {
            await assurance.save()
            return res.status(200).send({
                success: true,
                message: "Assurance client created successfully!",
                assurance : assurance
            })
        } catch (error) {
            return res.status(400).send({
                success: false,
                message: error
            })
        }
    },

    getClientInfo : async(req,res) => {
        const refclient = req.params.refclient

        try {
            const client = await Assurance.find({refClient : refclient})
            if (client){
                return res.status(203).json(client)   
            }else {
                return res.status(404).send({
                    success: false,
                    message: "ref client not found!"                })
            }
        } catch (error) {
            return res.status(400).send({
                success: false,
                message: error
            })
        }
    }
}