const AlpineElse = {
    start() {
        if (! window.Alpine) {
            throw new Error('Alpine is require for `x-else` to work.')
        }

        document.querySelectorAll('[x-else]').forEach(el => this.replaceElseDirectiveWithNegatedIf(el))
    },
    replaceElseDirectiveWithNegatedIf(el) {
        const previous = el.previousElementSibling

        if (! previous || previous.tagName.toLowerCase() !== 'template' || ! previous.hasAttribute('x-if')) {
            throw new Error('`x-else` encountered without a previous `x-if` sibling.')
        }

        el.setAttribute('x-if', `! (${previous.getAttribute('x-if')})`)
    }
}

const deferrer = window.deferLoadingAlpine || (callback => callback())

window.deferLoadingAlpine = function (callback) {
    AlpineElse.start()

    deferrer(callback)
}

export default AlpineElse