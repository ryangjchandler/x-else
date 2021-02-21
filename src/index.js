const AlpineElse = {
    start() {
        if (! window.Alpine) {
            throw new Error('Alpine is require for `x-else` to work.')
        }
    }
}

const deferrer = window.deferLoadingAlpine || (callback => callback())

window.deferLoadingAlpine = function (callback) {
    AlpineElse.start()

    deferrer(callback)
}

export default AlpineElse