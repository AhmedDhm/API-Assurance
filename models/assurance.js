const mongoose = require("mongoose");

const AssuranceSchema = new mongoose.Schema(
    {
        refClient: {
            default: "refClient",
            type: String,
        },
        nomClient: {
            default: "nomClient",
            type: String,
        },
        prenomClient: {
            default: "prenomClient",
            type: String,
        },
        addresseClient: {
            default: "addresseClient",
            type: String,
        },
        telClient: {
            default: "telClient",
            type: String,
        },
        assureur: {
            type: String,
            default: "assureur",
        },
        agence: {
            type: String,
            default: "agence",
        },
        numContrat: {
            type: String,
            default: "numContrat",
        },
        DBContrat: {
            type: String,
            default: "DBContrat",
        },
        DFContrat: {
            type: String,
            default: "DFContrat",
        },
        typeContrat: {
            default: [],
            type: Array,
        },
        voiture: {
            type: String,
            default: "voiture",
        },
        immatriculation: {
            type: String,
            default: "immatriculation",
        }

    },
    {
        timestamps: { currentTime: () => Date.now() },
    }
);
module.exports = mongoose.model("Assurance", AssuranceSchema);
