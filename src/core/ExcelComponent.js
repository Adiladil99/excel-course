import {DomListener} from '@core/DomListener';

export class ExcelComponents extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.store = options.store
        this.emitter = options.emitter
        this.unsubscribers = []
        this.storeSub = null

        this.prepare()
    }

    // Настраиваем нащ компонент до init
    prepare() {}

    // Возвращает шаблон компонента
    toHTML() {
        return ''
    }

    // Уводомляем слушателей про событий event 
    $emit(event, ...args) {
        const unsub = this.emitter.emit(event, ...args)
        this.unsubscribers.push(unsub)
    }

    // Подписываемся на событие emit
    $on(event, fn) {
        this.emitter.subscribe(event, fn)
    }

    $dispatch(action) {
        this.store.dispatch(action)
    }

    $subscribe(fn) {
        this.storeSub = this.store.subscribe(fn)
    }

    // Инициализируем компонент
    // Добавляем DOM слушателей
    init() {
        this.initDOMListeners()
    }

    // Удаляем компонент и чистим слушателей
    destroy() {
        this.removeDOMListeners()       
        this.unsubscribers.forEach(unsub => unsub())
        this.storeSub.unsubscribe()
    }
}