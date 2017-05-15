/**
 * Created by Almaz Khamatkhanov on 13/05/17.
 */

export const versions: number[] = [0];

export const errList = {
    "10": {
        "error": {
            "num": 10,
            "message": "Set a valid version of the library in constructor. Available versions are: " + versions
        }
    },
    "11": {
        "error": {
            "num": 11,
            "message": "This library works in browsers only. Check updates."
        }
    },
    "20": {
        "error": {
            "num": 20,
            "message": "The AltAddr url must be started with aa://"
        }
    },
    "30": {
        "error": {
            "num": 30,
            "message": "The URL or the AltAddr confirmation file is not available: ",
            "note": ""
        }
    },
        "31": {
            "error": {
                "num": 31,
                "message": "No one URL is set for this AltAddr.",
                "note": ""
            }
        },
    "0": {
        "error": {
            "num": 0,
            "message": ""
        }
    }
};