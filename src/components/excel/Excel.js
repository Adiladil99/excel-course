import {$} from '@core/dom'

export class Excel {
    constructor(selector, options) {
        this.$el = $(selector)
        this.components = options.components || []
    }

    getRoot() {
        const $root = $.create('div', 'excel')
        // const $root = document.createElement('div')
        // $root.classList.add('excel')1

        this.components = this.components.map(Component => {
            const $el = $.create('div', Component.className)
            // const $el = document.createElement('div')
            // $el.classList.add(Component.className)
            const component = new Component($el)
            $el.html(component.toHTML())
            $root.append($el)
            return component
        })

        return $root
    }

    render() {
        this.$el.append(this.getRoot())

        this.components.forEach(component => component.init());
    }
}