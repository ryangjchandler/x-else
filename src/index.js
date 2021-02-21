const AlpineElse = {
    start() {

    }
}

const deferrer = window.deferLoadingAlpine || (callback => callback())

window.deferLoadingAlpine = function (callback) {
    AlpineElse.start()

    deferrer(callback)
}

export default AlpineElse