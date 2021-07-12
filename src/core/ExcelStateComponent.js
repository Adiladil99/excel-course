import {ExcelComponents} from './ExcelComponent'

export class ExcelStateComponent extends ExcelComponents {
    constructor(...args) {
        super(...args)
    }

    get template() {
        return JSON.stringify(this.state, null, 2)
    }

    initState(inititalState = {}) {
        this.state = {...inititalState}
    }

    setState(newState) {
        this.state = {...this.state, ...newState}
        this.$root.html(this.template)
    }
}